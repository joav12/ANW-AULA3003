import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
    return(

        <>
        
        <Head>

            <title>Utilizando components</title>

        </Head>

        <Topo/>
        <Home titulo="Teste de título" texto="Teste de texto por props"/>
        <Intro titulo="Objetivo" texto="Objetivos da AT de INW"/>
        <Metas/>

        </>

    )
}