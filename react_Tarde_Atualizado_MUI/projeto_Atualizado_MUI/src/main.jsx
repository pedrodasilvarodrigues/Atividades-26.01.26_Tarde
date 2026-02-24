import "/src/CSS/global.css"
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormCadastro from './Components/FormCadastro'
import Quantidade from './Components/Quantidade'
import FormPreferencias from "./Components/FormPreference"
import FormConfiguracoes from "./Components/FormConfiguracoes"
import CadastrodeProdutos from "./Components/CadastrodeProdutos"


createRoot(document.getElementById('root')).render(
  <StrictMode>
<FormCadastro />
<Quantidade />
<FormPreferencias />
<FormConfiguracoes />
<CadastrodeProdutos />
  </StrictMode>,
)
