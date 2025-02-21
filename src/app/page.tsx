"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <section className="flex flex-col shadow-black items-center justify-center p-8 bg-gradient-to-r from-green-pmg/5 via-black to-green-pmg/5 rounded-2xl shadow-xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-center tracking-wider mb-6">
            O QUE ESTÁ ESPERANDO PARA{" "}
            <span className="text-black text-5xl font-extrabold [-webkit-text-stroke:2px_#00FF85]">
              MUDAR DE VIDA
            </span>
            ?
          </h1>
          <div className="flex flex-col items-center gap-6">
            <button onClick={() => window.location.href = "https://pay.cakto.com.br/UUwxgo8"} className="px-8 py-4 rounded-full font-extrabold border-2 border-green-pmg text-green-pmg bg-black hover:bg-green-pmg hover:text-black transition duration-200 transform hover:scale-150 shadow-lg">
              GARANTA AGORA
            </button>
            <Image
              draggable={false}
              className="select-none animate-bounce"
              width={100}
              height={100}
              src="/seta.webp"
              alt="seta verde"
            />
          </div>
        </section>

        <hr className="border-1 border-stone-600 my-6" />

        <section className="inlineblock flex flex-col md:flex-row justify-around w-full h-full">
          <div className="flex flex-col items-end text-right md:items-start md:text-left">
              <Title bold size="text-7xl md:text-5xl leading-12 me-8" compact>
                  Estrutura Orgânica
              </Title>
              <span className="relative w-fit text-7xl md:text-5xl mt-2 p-2 font-extrabold bg-green-pmg text-[#1f1f1f]">
                  Completa
              </span>    
          </div>    

          <div className="flex justify-center mt-4 md:mt-0">
              <Image
                  width={277}
                  height={185}
                  src="/image1.png"
                  alt="Marketing digital"
                  className="rounded-xl shadow-xl shadow-black transform my-12 md:my-0 scale-150 md:scale-100 transition duration-300"
              />
          </div>
        </section>

        <section className="mt-20 w-full flex justify-center">
          <div className="max-w-[80%] md:max-w-[720px]">
            <Title bold>Estrutura Orgânica De Vendas Automática</Title>
            <Paragraph>Estrutura Replicável de vendas para você aprender a vender sem aparecer, sem gastar com anúncios</Paragraph>
            <Paragraph>Converta Seguidores em Compradores! Aprenda a montar sua Estrutura De Trafégo Orgânico </Paragraph>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}
