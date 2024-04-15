import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex flex-col space-x-5 justify-center lg:flex-row ">
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-center">
            <h2 className="text-9x1 font-bold">HP t620</h2>
          </div>
        </CardHeader>
        <CardBody>
          <Image
            src="hpt620.jpg"
            alt="HP t620 image"
            className="object-cover rounded-xl"   
          />
          <div>
            System: TruNas Scale <br></br>
            Procesor: AMD GX-415GA Quad-Core APU with AMD Radeon HD 8330E (1.5 GHz) <br></br>
            Ram: 16 GB DDR4 <br></br>
            Pamięć: Oryginalne: 16GB Mój mod: 256GB M.2 (SATA), 2x2TB 3,5" HDD (RAID 1), 1,5TB 3,5" HDD

          </div>
          
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <div className="flex flex-row justify-center">
            <h2 className="text-9x1 font-bold">Lenovo ThinkCentre M710q</h2>
          </div>
        </CardHeader>
        <CardBody>
          <Image
            src="thinkcentre.jpeg"
            alt="Lenovo Thinkcentre"
            className="object-cover rounded-xl"
          />
        </CardBody>
      </Card>
    </div>
  );
}
