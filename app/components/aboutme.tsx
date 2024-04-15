'use client'
import { Card, CardBody } from "@nextui-org/react";
import {Divider} from "@nextui-org/react";

export default function Aboutme() {
    return (
      <section >
        <Card>
          <CardBody>
        <div className="flex flex-col justify-center">
            <h2 className="text-9x1 font-bold">Cześć,</h2>      
            <h1>jestem studentem Politechniki Śląskiej, a to moja strona na której chciałbym pokazać co robię w wolny czasie i nie tylko.
              Myślę że znajdzie się tu parę poradników, pochwalę się projektami które udało mi się zrobić, a także że będzie to moje większe CV
              </h1>
              <div className="pt-3">
              Ps. Strona ta jest na wczesnym etepie tworzenia a z każdy krokiem do przodu wymaga dużo nauki.    
              </div>    
        </div>   
        <Divider className="my-4"/>
        <div className="flex flex-col justify-center">
        <h2 className="text-9x1 font-bold">Technologie które używam</h2>
        Tutaj dwa rzadki mysle ze stykna takich ladnych obrazkow ktore technologie uzywam
        .NET C# REACT  tutaj stad https://devicon.dev
        </div>  
        </CardBody>
        </Card>
      </section>
    );
  }
  