"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { contatoSchema } from "@/validations/contatoSchema";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contatoSchema),
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Enviando mensagem...");

    try {
      const { nome, email, servico, mensagem } = data;

      const texto = `
        Olá! Tenho interesse em um projeto.

        Nome: ${nome}
        Email: ${email}
        Serviço: ${servico}

        Mensagem:
        ${mensagem}
      `;

      const mensagemFormatada = encodeURIComponent(texto);

      const numero = "244999000111";

      const url = `https://wa.me/${numero}?text=${mensagemFormatada}`;

      // atraso de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      window.open(url, "_blank");

      toast.success("Redirecionando para o WhatsApp...", { id: toastId });

      reset();
    } catch (err) {
      toast.error("Erro ao abrir WhatsApp", { id: toastId });
    }
  };

  return (
    <section id="contato" className="py-24 lg:py-40 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Grid de Informações e Formulário */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Coluna 1: Textos e Informações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h4 className="text-blue-900 font-bold uppercase tracking-[0.3em] text-xs">
                Contato
              </h4>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-700 leading-tight">
                Vamos iniciar seu <br />
                <span className="font-bold text-blue-900">
                  próximo projeto?
                </span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-md">
                Estamos prontos para transformar sua infraestrutura. Entre em
                contato e solicite uma consultoria técnica especializada.
              </p>
            </div>

            {/* Itens de Contato Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-500">
                  <i className="fas fa-envelope text-blue-900 group-hover:text-neutral-50 text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    E-mail
                  </p>
                  <p className="text-lg font-bold text-neutral-700">
                    contato@hossidev.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-500">
                  <i className="fas fa-phone text-blue-900 group-hover:text-neutral-50 text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Telefone / WhatsApp
                  </p>
                  <p className="text-lg font-bold text-neutral-700">
                    +244 972 614 886
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-500">
                  <i className="fas fa-map-marker-alt text-blue-900 group-hover:text-neutral-50 text-xl"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    Localização
                  </p>
                  <p className="text-lg font-bold text-neutral-700">
                    Centralidade do Kilamba Quarteirão F,<br />
                    Edifício F27, Apt. 91, Luanda, Angola
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna 2: Formulário Premium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-100 p-8 lg:p-12 rounded-3xl shadow-sm border border-neutral-400/30"
          >
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase ml-1">
                    Nome Completo
                  </label>

                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    {...register("nome")}
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-neutral-700"
                  />

                  {errors.nome && (
                    <p className="text-red-500 text-sm">
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-neutral-700 uppercase ml-1">
                    Seu E-mail
                  </label>

                  <input
                    type="email"
                    placeholder="joao@exemplo.com"
                    {...register("email")}
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-neutral-700"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 uppercase ml-1">
                  Serviço de Interesse
                </label>

                <select
                  {...register("servico")}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-neutral-700 appearance-none"
                >
                  <option value="">Selecione</option>
                  <option>Consultoria Estratégica</option>
                  <option>Segurança Eletrónica / CCTV</option>
                  <option>Criação de Sites e Sistemas</option>
                  <option>Energias Renováveis</option>
                  <option>Outros Serviços</option>
                </select>

                {errors.servico && (
                  <p className="text-red-500 text-sm">
                    {errors.servico.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 uppercase ml-1">
                  Mensagem
                </label>

                <textarea
                  rows="4"
                  placeholder="Como podemos ajudar o seu negócio?"
                  {...register("mensagem")}
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-neutral-700 resize-none"
                ></textarea>

                {errors.mensagem && (
                  <p className="text-red-500 text-sm">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full cursor-pointer py-5 bg-blue-900 text-neutral-50 font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]"
                type="submit"
              >
                ENVIAR MENSAGEM
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* MAPA GRANDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full h-112.5 lg:h-137.5 rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-400/20 group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126154.91574442152!2d13.158580231572626!3d-8.850239070002131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15194602923%3A0x6a0c0e39537136f3!2sLuanda%2C%20Angola!5e0!3m2!1spt-BR!2s!4v1700000000000!5m2!1spt-BR!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa de localização HOSSIDEV"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.5] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
