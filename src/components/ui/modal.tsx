"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Modal = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
export const ModalClose = Dialog.Close;

export function ModalContent({ children, className, ...props }: ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm" /><Dialog.Content className={cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-surface p-6 shadow-raised", className)} {...props}>
    {children}<Dialog.Close className="absolute right-4 top-4 rounded-sm p-1 text-muted hover:bg-black/5 hover:text-ink"><span className="sr-only">Close</span><X aria-hidden="true" size={20} /></Dialog.Close>
  </Dialog.Content></Dialog.Portal>;
}

export function ModalHeader({ children, className }: { children: ReactNode; className?: string }) { return <div className={cn("mb-5 pr-8", className)}>{children}</div>; }
export const ModalTitle = Dialog.Title;
export const ModalDescription = Dialog.Description;
