"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const phoneMask = (event: any) => {
    const input = event.target
    input.value = phoneMaskRegex(input.value)
  }

  const phoneMaskRegex = (value: string) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const onSubmit = () => {

  }

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
            <button onClick={() => setIsVisible(!isVisible)} className="px-8 py-4 rounded-full font-extrabold border-2 border-green-pmg text-green-pmg bg-black hover:bg-green-pmg hover:text-black transition duration-200 transform hover:scale-150 shadow-lg">
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

      {isVisible && (
        <motion.div 
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          exit={{ y: "100%" }} 
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed z-20 bottom-0 left-0 w-full h-full bg-[var(--background)] text-white text-3xl overflow-y-auto md:overflow-hidden"
        >
          <section className="md:flex justify-center items-center h-full">
            <div className="md:h-full h-0 md:w-[40%]">
              <div className="md:block hidden mt-20 p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="relative block">
                    <input
                      id="nome"
                      type="text"
                      autoComplete="off"
                      {...register("nome", { required: true })}
                      className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                      placeholder=" "
                    />
                    <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                      Nome completo
                    </span>
                    {errors.nome && <span className="text-sm text-red-400">Preencha com seu nome completo</span>}
                  </label>

                  
                  <label className="relative block my-4">
                    <input
                      id="email"
                      type="email"
                      autoComplete="off"
                      {...register("email", { required: true })}
                      className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                      placeholder=" "
                    />
                    <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                      E-mail
                    </span>
                    {errors.nome && <span className="text-sm text-red-400">Preencha com seu e-mail</span>}
                  </label>

                  <label className="relative block">
                    <input
                      id="telefone"
                      type="tel"
                      autoComplete="off"
                      {...register("telefone", { required: true, onChange: (e) => {phoneMask(e)} })}
                      className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                      placeholder=" "
                    />
                    <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                      Telefone com DDD
                    </span>
                    {errors.nome && <span className="text-sm text-red-400">Preencha com seu telefone</span>}
                  </label>
                  
                  <input value="Enviar & Entrar no Grupo" type="submit" className="rounded-full font-extrabold border-2 border-green-pmg text-green-pmg bg-black hover:bg-green-pmg hover:text-black transition duration-200 transform scale-50 hover:scale-75 shadow-lg cursor-pointer mt-4 py-2 px-4"/>
                </form>
              </div>
            </div>
      
            <div className="relative w-full md:w-[60%] h-[60%] md:h-full bg-white">
              <div className="absolute inset-0 bg-transparent shadow-[inset_0px_-50px_23px_0px_#1f1f1f] md:shadow-[inset_50px_0px_23px_0px_#1f1f1f] z-10" />
              <div className="relative w-full h-full">
                <Image 
                  src="/marketing.jpg" 
                  width={600} 
                  height={600} 
                  alt="marketing digital" 
                  className="w-full h-full md:h-full object-cover rounded-lg"
                />
              </div>
            </div>
      
            <div className="block md:hidden mt-6 p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="relative block">
                  <input
                    id="nome"
                    type="text"
                    autoComplete="off"
                    {...register("nome", { required: true })}
                    className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                    placeholder=" "
                  />
                  <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                    Nome completo
                  </span>
                  {errors.nome && <span className="text-sm text-red-400">Preencha com seu nome completo</span>}
                </label>

                
                <label className="relative block my-4">
                  <input
                    id="email"
                    type="email"
                    autoComplete="off"
                    {...register("email", { required: true })}
                    className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                    placeholder=" "
                  />
                  <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                    E-mail
                  </span>
                  {errors.nome && <span className="text-sm text-red-400">Preencha com seu e-mail</span>}
                </label>

                <label className="relative block">
                  <input
                    id="telefone"
                    type="tel"
                    autoComplete="off"
                    {...register("telefone", { required: true, onChange: (e) => {phoneMask(e)} })}
                    className="peer md:text-sm sm:text-lg block w-full rounded-md outline-none border-2 border-stone-400 bg-[var(--background)] text-stone-400 p-2 pt-5 focus:border-green-500 focus:ring-0 placeholder-transparent"
                    placeholder=" "
                  />
                  <span className="absolute left-2 top-2 text-sm bg-[var(--background)] text-stone-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-stone-400 peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-green-500">
                    Telefone com DDD
                  </span>
                  {errors.nome && <span className="text-sm text-red-400">Preencha com seu telefone</span>}
                </label>
                
                <input value="Enviar & Entrar no Grupo" type="submit"  className="rounded-full font-extrabold border-2 border-green-pmg text-green-pmg bg-black hover:bg-green-pmg hover:text-black transition duration-200 transform scale-100 hover:scale-110 shadow-lg cursor-pointer mt-4 py-2 px-4"/>
              </form>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
}
