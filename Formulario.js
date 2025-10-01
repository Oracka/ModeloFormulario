function COD(){
    
    let codigo = document.getElementById("codigo1").value
    // console.log(variavel pra ve funcionamento no console)
    // CODIGO  xx_xx//xxx-xxx.9.xxx

    if (codigo[2] != "_")
    {
        if (codigo[2] != undefined )
        {
         document.getElementById("codigo1").value = codigo.slice(0,2) + "_" + codigo[2]
        }
        
    }
    if (codigo[5] != "/")
            {
                if (codigo[5] != undefined )
                    {
                     document.getElementById("codigo1").value = codigo.slice(0,5) + "/" + codigo[5]
                    }
            }

    if (codigo[6] != "/")
            {
                if (codigo[6] != undefined )
                    {
                     document.getElementById("codigo1").value = codigo.slice(0,6) + "/" + codigo[6]
                    }
            }
    
    
    if (codigo[10] != "_")
    {
        if (codigo[10] != undefined )
        {
         document.getElementById("codigo1").value = codigo.slice(0,10) + "_" + codigo[10]
        }
        
    }
    if (codigo[14] != ".")
    {
        if (codigo[14] != undefined )
        {
         document.getElementById("codigo1").value = codigo.slice(0,14) + "." + codigo[14]
        }
        
    }

     if (codigo[15] != "9")
    {
        if (codigo[15] != undefined )
        {
         document.getElementById("codigo1").value = codigo.slice(0,15) + "9" + codigo[15]
        }
        
    }

    if (codigo[16] != ".")
    {
        if (codigo[16] != undefined )
        {
         document.getElementById("codigo1").value = codigo.slice(0,16) + "." + codigo[16]
        }
        
    }
    console.log(codigo)
}

function CNPJ(){
let cnpj = document.getElementById("cnpj").value
    // CNPJ XX.XXX.XXX/XXXX-XX

    if (cnpj[2] != ".")
    {
        if (cnpj[2] != undefined )
        {
         document.getElementById("cnpj").value = cnpj.slice(0,2) + "." + cnpj[2]
        }
        
    }

    if (cnpj[6] != ".")
    {
        if (cnpj[6] != undefined )
        {
         document.getElementById("cnpj").value = cnpj.slice(0,6) + "." + cnpj[6]
        }
        
    }

    if (cnpj[10] != "/")
    {
        if (cnpj[10] != undefined )
        {
         document.getElementById("cnpj").value = cnpj.slice(0,10) + "/" + cnpj[10]
        }
        
    }

    if (cnpj[15] != "-")
    {
        if (cnpj[15] != undefined )
        {
         document.getElementById("cnpj").value = cnpj.slice(0,15) + "-" + cnpj[15]
        }
        
    }
    console.log(cnpj)

}

function CEP(){
    let cep = document.getElementById("cep").value
    // CEP   xx.xxx-xxx

    if (cep[2] != ".")
    {
        if (cep[2] != undefined )
        {
         document.getElementById("cep").value = cep.slice(0,2) + "." + cep[2]
        }
        
    }

    if (cep[6] != "-")
    {
        if (cep[6] != undefined )
        {
         document.getElementById("cep").value = cep.slice(0,6) + "-" + cep[6]
        }
        
    }
    console.log(cep)


}

function CPF(){
let cpf = document.getElementById("cpf").value
// CPF    xxx.xxx.xxx-xx
if (cpf[3] != ".")
    {
        if (cpf[3] != undefined )
        {
         document.getElementById("cpf").value = cpf.slice(0,3) + "." + cpf[3]
        }
        
    }

    if (cpf[7] != ".")
    {
        if (cpf[7] != undefined )
        {
         document.getElementById("cpf").value = cpf.slice(0,7) + "." + cpf[7]
        }
        
    }

    if (cpf[11] != "-")
    {
        if (cpf[11] != undefined )
        {
         document.getElementById("cpf").value = cpf.slice(0,11) + "-" + cpf[11]
        }
        
    }

    

console.log(cpf)
    
}

function TEL(){
let tel = document.getElementById("telefone").value
// TELEFONE (xx)xxxxx-xxxx
if (tel[0] != "(")
    {
        if (tel[0] != undefined )
        {
         document.getElementById("telefone").value = tel.slice(0,0) + "(" + tel[0]
        }
        
    }

    if (tel[3] != ")")
    {
        if (tel[3] != undefined )
        {
         document.getElementById("telefone").value = tel.slice(0,3) + ")" + tel[3]
        }
        
    }

    if (tel[9] != "-")
    {
        if (tel[9] != undefined )
        {
         document.getElementById("telefone").value = tel.slice(0,9) + "-" + tel[9]
        }
        
    }

    

    

    
}