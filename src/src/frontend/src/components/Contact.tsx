import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Mail, Phone, MapPin } from "lucide-react";
import { useSubmitContact } from "../hooks/useQueries";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const { mutate: submitContact, isPending } = useSubmitContact();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    submitContact(
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim() || null,
        companyName: formData.companyName.trim() || null,
        message: formData.message.trim(),
      },
      {
        onSuccess: () => {
          toast.success("Message sent successfully!", {
            description: "We'll get back to you within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            companyName: "",
            message: "",
          });
          setErrors({});
        },
        onError: (error) => {
          console.error("Contact form error:", error);
          toast.error("Failed to send message", {
            description: "Please try again or contact us directly.",
          });
        },
      }
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your business with cutting-edge technology? Reach
            out to discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                We're here to help. Reach out via any channel and our team will
                respond promptly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a
                    href="mailto:contact@skynix.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@skynix.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Office</div>
                  <p className="text-muted-foreground">
                    123 Tech Park Avenue
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? "border-destructive" : ""}
                    disabled={isPending}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={errors.email ? "border-destructive" : ""}
                    disabled={isPending}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    disabled={isPending}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-foreground">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company"
                    disabled={isPending}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={6}
                  className={errors.message ? "border-destructive" : ""}
                  disabled={isPending}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full sm:w-auto px-8"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
