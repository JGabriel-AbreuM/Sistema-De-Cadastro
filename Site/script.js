let datas = []

function criaObjeto(nome, sobrenome, email, cpf, senha) {
    return (pessoa = {
    nome: nome,
    sobrenome : sobrenome,
    email : email,
    cpf : cpf,
    senha : senha,
  })
}

function cadastramento() {
    let system_cadastro = document.querySelector("body");
    system_cadastro.innerHTML = code_cadastro;
}

function error_login() {
    let system_cadastro = document.querySelector("body");
    system_cadastro.innerHTML = code_de_login;
}
var code_de_login = `
<section>
    <header></header>

    <h1>Login</h1>

    <form action="">
        <div class="campo">
            <div class="input-container">
                <input class="input" type="email" pattern=".+" id="email" name="email" required>
                <label for="email">Email</label>
            </div>
            <div class="input-container">
                <input class="input" type="password" pattern=".+" id="password" name="password" required>
                <label for="password">Senha</label>
            </div>
        </div>
        <button onClick="login()" class="button" type="button">Logar</button>
        <button class="return" type="button" onclick="voltar()">Voltar</button>
    </form>
</section>
` 

var code_cadastro = `
<section>
<header></header>
    <h1>Sistema de Cadastro</h1>

<form action="">
    <fieldset class="grupo">
        <div class="campo">
            <div class="input-container">
                <input class="input" id="name" name="name" pattern=".+" required>
                <label class="label" for="name">Nome</label>
            </div>
            <div class="input-container">
                <input class="input" id="surname" name="surname" pattern=".+" required>
                <label class="label" for="surname">Sobrenome</label>
            </div>
        </div>
    </fieldset>

    <div class="campo">
        <div class="input-container">
            <input class="input" id="email" name="email" type="email" pattern=".+" required>
            <label class="label" for="email">E-mail</label>
        </div>
        <div class="input-container">
            <input class="input" id="cpf" name="cpf" pattern="[0-9]{11}" required>
            <label class="label" for="cpf">CPF (Digite apenas Números)</label>
        </div>
        <div class="input-container">
            <input class="input" id="password" name="password" type="password" pattern=".+" required>
            <label class="label" for="password">Senha</label>
        </div>

    </div>
    <button onclick="cadastra()" class="button" type="button">Concluído</button>
    <button onclick="logar()" class="login-button" type="button">Login</button>

</form> 
</section>
`

function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("password").value;

    if (email == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
            <header></header>

            <h1>Login</h1>

            <form action="">
                <div class="campo">
                    <div class="input-container">
                        <input class="error_input" type="email" pattern=".+" id="email" name="email" required>
                        <label for="email">Email</label>
                    </div>
                    <p>Acontecera algum erro!</p>
                    <div class="input-container">
                        <input class="input" type="password" pattern=".+" id="password" name="password" required>
                        <label for="password">Senha</label>
                    </div>
                </div>
                <button onClick="login()" class="button" type="button">Logar</button>
                <button class="return" type="button" onclick="voltar()">Voltar</button>
            </form>
    </section>
` ;
    } else if (senha == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
            <header></header>

            <h1>Login</h1>

            <form action="">
                <div class="campo">
                    <div class="input-container">
                        <input class="input" type="email" pattern=".+" id="email" name="email" value="${email}"required>
                        <label for="email">Email</label>
                    </div>
                    
                    <div class="input-container">
                        <input class="error_input" type="password" pattern=".+" id="password" name="password" required>
                        <label for="password">Senha</label>
                    </div>
                    <p>Acontecera algum erro!</p>
                </div>
                <button onClick="login()" class="button" type="button">Logar</button>
                <button class="return" type="button" onclick="voltar()">Voltar</button>
            </form>
        </section>`
    } else {
        let cadastrado = false
        let ind = 0

        for (var i = 0; i < datas.length; i++){
            if (datas[i].senha == senha && datas[i].email == email){
                console.log("Deu certo")
                cadastrado = true
                ind = i
            }
        }

        if (cadastrado == true) {
            console.log(datas[ind].foto)
            let encontrado = document.querySelector("body");
            encontrado.innerHTML = `
                <section>
                    <header>
                        <img src="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png">
                    </header>
                    <h1>Bem-vindo<h1>
                    <h3>${datas[ind].nome} ${datas[ind].sobrenome}</h3>
  
                    <div class="info">
                        <p class="informacoes"><strong>CPF:</strong> ${datas[ind].cpf}</p>
                    </div>

                    <button onclick="logar()" class="login-button" type="button">Sair</button>
                </section`
        } 
        
        else {
            let not_encontrado = document.querySelector("body");
            not_encontrado.innerHTML = `
            <section>
                <h3>Ops... Houve algum erro.</h3>
                  <div class="bottons">
                    <button class="button-completed" type="button" onclick="cadastramento()">Cadastro</button>
                    <button class="button-completed" type="button" onclick="error_login()">Login</button>     
                  </div>
              </section>
            `
        }
    }



}
function logar() {
  let box = document.querySelector('body');
  box.innerHTML = code_de_login;
}   

function voltar() {
  let voltar = document.querySelector('body');
  voltar.innerHTML = code_cadastro;
}

function cadastra() {
    console.log("entrou")
    var nome = document.getElementById("name").value;
    var sobrenome = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var password = document.getElementById("password").value;

    if (nome == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
<header></header>
    <h1>Sistema de Cadastro</h1>

<form action="">
    <fieldset class="grupo">
        <div class="campo">
            <div class="input-container">
                <input class="error_input" id="name" name="name" pattern=".+" required>
                <label class="label" for="name">Nome</label>
            </div>
            <p>Ocorrera algum erro!<p>
            <div class="input-container">
                <input class="input" id="surname" name="surname" pattern=".+" required>
                <label class="label" for="surname">Sobrenome</label>
            </div>
        </div>
    </fieldset>

    <div class="campo">
        <div class="input-container">
            <input class="input" id="email" name="email" type="email" pattern=".+" required>
            <label class="label" for="email">E-mail</label>
        </div>
        <div class="input-container">
            <input class="input" id="cpf" name="cpf" pattern="[0-9]{11}" required>
            <label class="label" for="cpf">CPF (Digite apenas Números)</label>
        </div>
        <div class="input-container">
            <input class="input" id="password" name="password" type="password" pattern=".+" required>
            <label class="label" for="password">Senha</label>
        </div>

    </div>
    <button onclick="cadastra()" class="button" type="button">Concluído</button>
    <button onclick="logar()" class="login-button" type="button">Login</button>

</form> 
</section>
;`
    }

    else if (sobrenome == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
        <header></header>
            <h1>Sistema de Cadastro</h1>
        
        <form action="">
            <fieldset class="grupo">
                <div class="campo">
                    <div class="input-container">
                        <input class="input" id="name" name="name" pattern=".+" required value="${nome}">
                        <label class="label" for="name">Nome</label>
                    </div>
                    <div class="input-container">
                        <input class="error_input" id="surname" name="surname" pattern=".+" required>
                        <label class="label" for="surname">Sobrenome</label>
                    </div>
                    <p>Ocorrera algum erro!<p>
                </div>
            </fieldset>
        
            <div class="campo">
                <div class="input-container">
                    <input class="input" id="email" name="email" type="email" pattern=".+" required>
                    <label class="label" for="email">E-mail</label>
                </div>
                <div class="input-container">
                    <input class="input" id="cpf" name="cpf" pattern="[0-9]{11}" required>
                    <label class="label" for="cpf">CPF (Digite apenas Números)</label>
                </div>
                <div class="input-container">
                    <input class="input" id="password" name="password" type="password" pattern=".+" required>
                    <label class="label" for="password">Senha</label>
                </div>

            </div>
            <button onclick="cadastra()" class="button" type="button">Concluído</button>
            <button onclick="logar()" class="login-button" type="button">Login</button>
        
        </form> 
        </section>
        `;
    }

    else if (email == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
        <header></header>
            <h1>Sistema de Cadastro</h1>
        
        <form action="">
            <fieldset class="grupo">
                <div class="campo">
                    <div class="input-container">
                        <input class="input" id="name" name="name" pattern=".+" value="${nome}" required>
                        <label class="label" for="name">Nome</label>
                    </div>
                    <div class="input-container">
                        <input class="input" id="surname" name="surname" pattern=".+" value="${sobrenome}" required>
                        <label class="label" for="surname">Sobrenome</label>
                    </div>
                </div>
            </fieldset>
        
            <div class="campo">
                <div class="input-container">
                    <input class="error_input" id="email" name="email" type="email" pattern=".+" required>
                    <label class="label" for="email">E-mail</label>
                </div>
                <p>Ocorreu algum erro!<p>
                <div class="input-container">
                    <input class="input" id="cpf" name="cpf" pattern="[0-9]{11}" required>
                    <label class="label" for="cpf">CPF (Digite apenas Números)</label>
                </div>
                <div class="input-container">
                    <input class="input" id="password" name="password" type="password" pattern=".+" required>
                    <label class="label" for="password">Senha</label>
                </div>


            </div>
            <button onclick="cadastra()" class="button" type="button">Concluído</button>
            <button onclick="logar()" class="login-button" type="button">Login</button>
        
        </form> 
        </section>
`;
    }

    else if (isNaN(cpf) == true || cpf.length != 11){
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
        <header></header>
            <h1>Sistema de Cadastro</h1>
        
        <form action="">
            <fieldset class="grupo">
                <div class="campo">
                    <div class="input-container">
                        <input class="input" id="name" name="name" pattern=".+" value="${nome}" required>
                        <label class="label" for="name">Nome</label>
                    </div>
                    <div class="input-container">
                        <input class="input" id="surname" name="surname" pattern=".+" value="${sobrenome}" required>
                        <label class="label" for="surname">Sobrenome</label>
                    </div>
                </div>
            </fieldset>
        
            <div class="campo">
                <div class="input-container">
                    <input class="input" id="email" name="email" type="email" pattern=".+" value="${email}" required>
                    <label class="label" for="email">E-mail</label>
                </div>
                <div class="input-container">
                    <input class="error_input" id="cpf" name="cpf" pattern="[0-9]{11}" required>
                    <label class="label" for="cpf">CPF (Digite apenas Números)</label>
                </div>
                <p>Ocorreu algum erro!</p>
                <div class="input-container">
                    <input class="input" id="password" name="password" type="password" pattern=".+" required>
                    <label class="label" for="password">Senha</label>
                </div>
        
            </div>
            <button onclick="cadastra()" class="button" type="button">Concluído</button>
            <button onclick="logar()" class="login-button" type="button">Login</button>
        
        </form> 
        </section>
`;
    }

    else if (password == "") {
        let error_input = document.querySelector("body");
        error_input.innerHTML = `
        <section>
        <header></header>
            <h1>Sistema de Cadastro</h1>
        
        <form action="">
            <fieldset class="grupo">
                <div class="campo">
                    <div class="input-container">
                        <input class="input" id="name" name="name" pattern=".+" value="${nome}" required>
                        <label class="label" for="name">Nome</label>
                    </div>
                    <div class="input-container">
                        <input class="input" id="surname" name="surname" pattern=".+" value="${sobrenome}"required>
                        <label class="label" for="surname">Sobrenome</label>
                    </div>
                </div>
            </fieldset>
        
            <div class="campo">
                <div class="input-container">
                    <input class="input" id="email" name="email" type="email" pattern=".+" value="${email}" required>
                    <label class="label" for="email">E-mail</label>
                </div>
                <div class="input-container">
                    <input class="input" id="cpf" name="cpf" pattern="[0-9]{11}" value="${cpf}" required>
                    <label class="label" for="cpf">CPF (Digite apenas Números)</label>
                </div>
                <div class="input-container">
                    <input class="error_input" id="password" name="password" type="password" pattern=".+" required>
                    <label class="label" for="password">Senha</label>
                </div>
        
            </div>
            <button onclick="cadastra()" class="button" type="button">Concluído</button>
            <button onclick="logar()" class="login-button" type="button">Login</button>
        
        </form> 
        </section>
        `;
    } 
    else {
        datas.push(criaObjeto(nome, sobrenome, email, cpf, password))
                let documento = document.querySelector("body");
                documento.innerHTML = `
                <section>
                    <h3>Cadastro Concluído</h3>
                    <div class="bottons">
                        <button class="button-completed" type="button" onclick="voltar()">Novo Cadastro</button>
                        <button class="button-completed" type="button" onclick="logar()">Login</button>     
                    </div>
            
                    <div class="network">
                        <a href="https://twitter.com/player1_gabriel?s=08" target="_blank">
                        <div class="icon"><i class="fa fa-twitter"></i></div></a>

                        <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-400909209/" target="_blank">
                        <div class="icon"><i class="fa fa-linkedin"></i></div></a>
                    </div>  
                </section>
                `
    }
}


