import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import ModalLoading from "./modalLoading";
//createRoot: es la forma de renderizar nuestro codigo en el DOM
export function openModal() {
  //lazyloading: es la forma de caragar nuestro codigo solo cuando se necesite, es decir, cuando el usuario lo solicite, esto nos ayuda a mejorar el rendimiento de nuestra aplicacion, ya que no cargamos codigo innecesario.

  const Modal = lazy(() => import("./modalSettings"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);
  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading/>}>
    <Modal root={root} title="Modal de configuraciones"/>
    </Suspense>
  );
}


export function openModalAccount() {
  const Modal = lazy(() => import("./modalAccount"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading/>}>
    <Modal root={root} title="Modal de tu cuenta"/>
    </Suspense>
  );
}
