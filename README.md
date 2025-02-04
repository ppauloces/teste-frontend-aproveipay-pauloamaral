## **🛒 Checkout com Data Table e Kanban**
**Projeto desenvolvido para simular um fluxo de checkout com pagamento, gestão de produtos e acompanhamento do status de entrega via Kanban interativo.**

### **📌 Tecnologias Utilizadas**
- **React.js** - Biblioteca principal para desenvolvimento do frontend.
- **Tailwind CSS** - Framework CSS para estilização rápida e responsiva.
- **Framer Motion** - Biblioteca para animações suaves e interativas.
- **@hello-pangea/dnd** - Gerenciamento de Drag-and-Drop no Kanban.
- **LocalStorage** - Persistência dos dados do usuário.

---

## **🚀 Funcionalidades**
### **1️⃣ Checkout**
- **Formulário para adicionar produtos** ao carrinho com:
  - Nome do Produto
  - Quantidade
  - Preço unitário
- **Simulação de Pagamento**:
  - Mostra um indicador de **"Processando pagamento..."** por **3 segundos**.
  - Exibe a mensagem **"Pagamento aprovado!"** e adiciona o produto à lista.
  - Durante o processamento, o botão exibe um **spinner animado**.

---

### **2️⃣ Data Table de Produtos**
- Exibição dos produtos comprados em uma **tabela zebrada e estilizada**.
- Permite **editar** diretamente os valores (nome, quantidade e preço).
- Permite **excluir produtos** da lista.
- Atualiza automaticamente os **valores totais** na tabela.

---

### **3️⃣ Kanban de Entrega**
- Três colunas representando os status:
  - 🟡 **Pendente** → Produtos aguardando envio.
  - 🔵 **Em Transporte** → Produtos em processo de entrega.
  - 🟢 **Entregue** → Produtos já entregues.
- **Drag-and-Drop** para mover produtos entre os status.
- **Sincronização automática** com a tabela.

---

### **4️⃣ Alternância entre Data Table e Kanban**
- Botão para **alternar entre a tabela e o Kanban** sem recarregar a página.

---

### **5️⃣ Persistência de Dados**
- Todos os produtos adicionados e seus status são **salvos no LocalStorage**.
- Ao recarregar a página, os dados são **recuperados automaticamente**.

---

## **📂 Estrutura do Projeto**
```sh
📦 checkout-app
├── 📂 src
│   ├── 📂 components
│   │   ├── 📄 CheckoutForm.jsx  # Formulário de checkout
│   │   ├── 📄 DataTable.jsx     # Tabela de produtos comprados
│   │   ├── 📄 Kanban.jsx        # Kanban interativo para status de entrega
│   │   ├── 📄 Footer.jsx        # Footer com links do GitHub e LinkedIn
│   ├── 📄 App.jsx               # Componente principal
│   ├── 📄 index.css             # Estilos gerais
│   ├── 📄 main.jsx              # Entrada principal do React
│   ├── 📄 tailwind.config.js    # Configuração do Tailwind CSS
└── 📄 README.md                 # Documentação do projeto
```

---

## **🛠️ Como Rodar o Projeto**
1️⃣ **Clone o repositório:**
```sh
git clone https://github.com/ppauloces/seu-repositorio.git
```

2️⃣ **Instale as dependências:**
```sh
npm install
```

3️⃣ **Execute o projeto:**
```sh
npm run dev
```

4️⃣ **Abra no navegador:**
```
http://localhost:5173
```

---

## **👨‍💻 Desenvolvido por**
**Paulo César**  
- 🔗 [LinkedIn](https://www.linkedin.com/in/ppauloces/)  
- 💻 [GitHub](https://github.com/ppauloces/)  

---

### **🚀 O projeto está pronto para ser avaliado pelo Tech Leader!**
Caso precise de alguma melhoria ou explicação extra, só avisar! 😃🔥
