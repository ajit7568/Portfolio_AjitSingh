
import React from "react";

interface SectionTitleProps {
  title: string;
  id?: string;
}

export default function SectionTitle({ title, id }: SectionTitleProps) {
  return (
    <h2 id={id} className="text-3xl font-bold mb-6 gradient-text">
      {title}
    </h2>
  );
}
