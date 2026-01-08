"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

interface IconPlaceholderProps extends React.ComponentProps<"svg"> {
  lucide?: string
  tabler?: string
  hugeicons?: string
  phosphor?: string
}

export function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  className,
  ...props
}: IconPlaceholderProps) {
  // Basit bir fallback - Lucide icon'larını kullan
  // Gerçek implementasyon icon library seçimine göre değişir
  return <CheckIcon className={className} {...props} />
}
