import "/src/CSS/global.css"
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormCadastro from './Components/FormCadastro'
import Quantidade from './Components/Quantidade'
import FormPreferencias from "./Components/FormPreference"
import FormConfiguracoes from "./Components/FormConfiguracoes"
import CadastrodeProdutos from "./Components/CadastrodeProdutos"
import ExemploUseStates from "./Components/ExemploUseStates"
import ContadorEstoque from "./Components/ContadorEstoque"
import ExemploEffect from "./Components/ExemploEffect"
import CronometroSimples from "./Components/CronometroSimples"
import MonitorEstoque from "./Components/MonitorEstoque"


createRoot(document.getElementById('root')).render(
  <StrictMode>
<FormCadastro />
<Quantidade />
<FormPreferencias />
<FormConfiguracoes />
<CadastrodeProdutos />
<ExemploUseStates />
<ExemploEffect />
<ContadorEstoque />
<CronometroSimples />
<MonitorEstoque />
  </StrictMode>,
)
