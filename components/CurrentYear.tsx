"use client";

import { useEffect, useState } from "react";

// 年号はクライアント側で取得する（ビルド年とのズレを避けるため）
export default function CurrentYear() {
  const [year, setYear] = useState<number | "">("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span>{year}</span>;
}
