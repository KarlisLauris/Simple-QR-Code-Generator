"use client"

import React, { useRef, useState } from "react";
import Link from "next/link";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';

export default function Home() {
  const [value, setValue] = useState("");
  const qrRef = useRef(null);

  const downloadQR = async () => {
    try {
      const qrCodeElement = qrRef.current;
      if (!qrCodeElement) return;

      const canvas = await html2canvas(qrCodeElement);
      canvas.toBlob((blob) => {
        if (blob) {
          saveAs(blob, "qr_code.png");
        }
      });
    } catch (error) {
      console.error("Error generating QR code image:", error);
    }
  };

  return (
    <div className="w-full flex flex-col text-center items-center">
      <h1 className="text-7xl">Simple QR Code Generator</h1>
      <span>I made this so I can easily generate QR codes without having to login somewhere</span>
      <span>It is also open source, so you can check the code on my <Link className="font-bold" href="https://github.com/KarlisLauris/Simple-QR-Code-Generator"> GitHub </Link></span>
      <div className="w-full pt-6">
        <input 
          className="w-1/2 text-black h-10 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500" 
          type="text" 
          placeholder="Start writing to generate QR code" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {value.length > 0 && (
        <div>
          <div className="mt-6 border rounded-full border-white" ref={qrRef}>
            <QRCode size={256} value={value} />
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={downloadQR}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}
