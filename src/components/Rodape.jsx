import React from 'react';
import { Footer } from "flowbite-react";

const Rodape = () => {
    return (
    <Footer container>
      <div style={{background: '#000000', color: "#FFFFFF"}} className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <h5  style={{ marginTop: 5}}>Projeto™ 2025</h5>
            <Footer.Brand
                style={{ height: 40,  width: 40}}
                src="https://logodownload.org/wp-content/uploads/2018/01/marinha-brasil-logo.png"
                alt="Frota Naval Remake Logo"
                name="Frota Naval Remake"
            />
        </div>
        <Footer.Divider />
        <Footer.Copyright style={{paddingBottom: 5}} by=" Frota Naval Remake™" year={2023} />
      </div>
    </Footer>
    );
}

export default Rodape