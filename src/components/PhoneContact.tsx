"use client";
import React from "react";
import { Button } from "./ui/button";
import { PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PhoneContactProps {
  phoneNumber?: string;
}

function PhoneContact({ phoneNumber = "081260671163" }: PhoneContactProps) {
  const { toast } = useToast();

  const handlePhoneClick = () => {
    try {
      const message = encodeURIComponent(
        `Halo!, saya dari website VionaToyotaRantauprapat.`
      );
      window.open(`https://wa.me/6281260671163?text=${message}`, "_blank");

      toast({
        title: "Menghubungi",
        description: "Membuka aplikasi whatsapp...",
        duration: 3000,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal",
        description: "Tidak dapat membuka aplikasi whatsapp",
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={handlePhoneClick}
      className="hover:text-red-500 transition transform hover:bg-secondary 
        active:bg-primary-foreground hover:scale-95 duration-200 ease-in-out gap-2"
      variant="secondary"
      size="sm"
    >
      {phoneNumber}
      <PhoneCall className="w-4 h-4 text-red-500" />
    </Button>
  );
}

export default PhoneContact;
