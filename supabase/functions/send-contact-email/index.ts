import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-contact-email function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();
    console.log("Received contact form:", { name, email, subject, messageLength: message?.length });

    // Server-side validation
    if (!name || name.trim().length === 0 || name.length > 100) {
      console.error("Invalid name");
      return new Response(JSON.stringify({ error: "Nome inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      console.error("Invalid email");
      return new Response(JSON.stringify({ error: "Email inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!subject || subject.trim().length === 0 || subject.length > 200) {
      console.error("Invalid subject");
      return new Response(JSON.stringify({ error: "Assunto inválido" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!message || message.trim().length === 0 || message.length > 1000) {
      console.error("Invalid message");
      return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Send notification email to support
    console.log("Sending notification email to suporte@vyrsystem.com.br");
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "VYR System <onboarding@resend.dev>",
        to: ["suporte@vyrsystem.com.br"],
        subject: `[Contato VYR] ${subject}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0f; color: #e5e5e5;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #22d3ee; margin: 0;">Nova Mensagem de Contato</h1>
            </div>
            
            <div style="background: #1a1a2e; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
              <h2 style="color: #a78bfa; margin-top: 0; font-size: 18px;">Dados do Remetente</h2>
              <p style="margin: 8px 0;"><strong style="color: #22d3ee;">Nome:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong style="color: #22d3ee;">Email:</strong> <a href="mailto:${email}" style="color: #a78bfa;">${email}</a></p>
            </div>
            
            <div style="background: #1a1a2e; border-radius: 12px; padding: 24px;">
              <h2 style="color: #a78bfa; margin-top: 0; font-size: 18px;">Assunto</h2>
              <p style="margin: 8px 0;">${subject}</p>
              
              <h2 style="color: #a78bfa; margin-top: 24px; font-size: 18px;">Mensagem</h2>
              <p style="margin: 8px 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #666; font-size: 12px;">
                Este email foi enviado automaticamente pelo formulário de contato do VYR System.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorData = await notificationRes.text();
      console.error("Failed to send notification email:", errorData);
      throw new Error("Falha ao enviar email de notificação");
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to sender
    console.log("Sending confirmation email to:", email);
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "VYR System <onboarding@resend.dev>",
        to: [email],
        subject: "Recebemos sua mensagem - VYR System",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0f; color: #e5e5e5;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #22d3ee; margin: 0;">VYR System</h1>
              <p style="color: #a78bfa; margin-top: 8px;">Otimização Cognitiva Personalizada</p>
            </div>
            
            <div style="background: #1a1a2e; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
              <h2 style="color: #22d3ee; margin-top: 0;">Olá, ${name}!</h2>
              <p style="line-height: 1.6;">
                Obrigado por entrar em contato conosco. Recebemos sua mensagem e nossa equipe irá analisá-la com atenção.
              </p>
              <p style="line-height: 1.6;">
                Normalmente respondemos em até <strong style="color: #a78bfa;">24 horas úteis</strong>.
              </p>
            </div>
            
            <div style="background: #1a1a2e; border-radius: 12px; padding: 24px;">
              <h3 style="color: #a78bfa; margin-top: 0; font-size: 16px;">Resumo da sua mensagem:</h3>
              <p style="margin: 8px 0;"><strong style="color: #22d3ee;">Assunto:</strong> ${subject}</p>
              <p style="margin: 8px 0; white-space: pre-wrap; color: #999;">"${message}"</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #666; font-size: 12px;">
                VYR System - Otimização Cognitiva Personalizada<br>
                Este é um email automático, por favor não responda diretamente.
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const errorData = await confirmationRes.text();
      console.error("Failed to send confirmation email:", errorData);
      // Don't throw here - notification was sent successfully
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails enviados com sucesso" 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro ao enviar email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
