import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { VYRLogo } from "@/brand";
import { supabase } from "@/integrations/supabase/client";

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(255, "Email deve ter no máximo 255 caracteres"),
  subject: z
    .string()
    .trim()
    .min(1, "Assunto é obrigatório")
    .max(200, "Assunto deve ter no máximo 200 caracteres"),
  message: z
    .string()
    .trim()
    .min(1, "Mensagem é obrigatória")
    .max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Erro ao enviar mensagem");
      }

      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderemos em breve.",
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen bg-vyr-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-vyr-gray-900/95 backdrop-blur-xl border-b border-vyr-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <VYRLogo variant="light" size="md" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-vyr-gray-400 hover:text-vyr-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {isSuccess ? (
          // Success State
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-vyr-cyan to-vyr-purple flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-vyr-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-vyr-white mb-4">
              Mensagem Enviada!
            </h1>
            <p className="text-vyr-gray-400 mb-8 max-w-md mx-auto">
              Obrigado por entrar em contato. Você receberá um email de confirmação 
              e nossa equipe responderá em até 24 horas úteis.
            </p>
            <Button
              onClick={resetForm}
              variant="outline"
              className="border-vyr-gray-700 text-vyr-gray-300 hover:bg-vyr-gray-800 hover:text-vyr-white"
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          // Form State
          <>
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-vyr-white mb-4">
                Entre em Contato
              </h1>
              <p className="text-vyr-gray-400 max-w-md mx-auto">
                Tem dúvidas sobre o VYR System? Nossa equipe está pronta para ajudar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-vyr-gray-300">
                  Nome <span className="text-vyr-cyan">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Seu nome completo"
                  maxLength={100}
                  className={`bg-vyr-gray-800 border-vyr-gray-700 text-vyr-white placeholder:text-vyr-gray-500 focus:border-vyr-cyan focus:ring-vyr-cyan/20 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-vyr-gray-300">
                  Email <span className="text-vyr-cyan">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  maxLength={255}
                  className={`bg-vyr-gray-800 border-vyr-gray-700 text-vyr-white placeholder:text-vyr-gray-500 focus:border-vyr-cyan focus:ring-vyr-cyan/20 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-vyr-gray-300">
                  Assunto <span className="text-vyr-cyan">*</span>
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="Qual o assunto da sua mensagem?"
                  maxLength={200}
                  className={`bg-vyr-gray-800 border-vyr-gray-700 text-vyr-white placeholder:text-vyr-gray-500 focus:border-vyr-cyan focus:ring-vyr-cyan/20 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-vyr-gray-300">
                  Mensagem <span className="text-vyr-cyan">*</span>
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Escreva sua mensagem aqui..."
                  maxLength={1000}
                  rows={6}
                  className={`bg-vyr-gray-800 border-vyr-gray-700 text-vyr-white placeholder:text-vyr-gray-500 focus:border-vyr-cyan focus:ring-vyr-cyan/20 resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                <div className="flex justify-between items-center">
                  {errors.message ? (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-vyr-gray-500 text-xs">
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-vyr-cyan to-vyr-purple hover:from-vyr-cyan/90 hover:to-vyr-purple/90 text-vyr-white font-medium py-6 text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-vyr-gray-800 text-center">
              <p className="text-vyr-gray-500 text-sm">
                Respondemos em até 24 horas úteis. Para assuntos urgentes, 
                entre em contato pelo email{" "}
                <a
                  href="mailto:suporte@vyrsystem.com.br"
                  className="text-vyr-cyan hover:underline"
                >
                  suporte@vyrsystem.com.br
                </a>
              </p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
