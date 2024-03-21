import { render, screen } from '@testing-library/react';
import App from './App';

interface FormData {
  DAT_INCLUSAO: string;
  NOM_AMBIENTE: string;
  NOM_CAMADA: string;
  DSC_TIP_ORIGEM: string;
  DSC_TIP_DESTINO: string;
  DSC_DOMINIO: string;
  COD_PIPELINE: string;
  NOM_PIPELINE_TAB: string;
  DSC_PIPELINE_PATH: string;
  DSC_PIPELINE_COMMENT: string;
  DSC_PATH_NOTEBOOK: string;
  COD_FREQUENCIA: string;
  DSC_FREQUENCIA: string;
  COD_STATUS: string;
  DES_STATUS: string;
  COD_EXECUCAO: string;
  DSC_EXECUCAO: string;
}

const FormularioInsercao: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    DAT_INCLUSAO: '',
    NOM_AMBIENTE: '',
    NOM_CAMADA: '',
    DSC_TIP_ORIGEM: '',
    DSC_TIP_DESTINO: '',
    DSC_DOMINIO: '',
    COD_PIPELINE: '',
    NOM_PIPELINE_TAB: '',
    DSC_PIPELINE_PATH: '',
    DSC_PIPELINE_COMMENT: '',
    DSC_PATH_NOTEBOOK: '',
    COD_FREQUENCIA: '',
    DSC_FREQUENCIA: '',
    COD_STATUS: '',
    DES_STATUS: '',
    COD_EXECUCAO: '',
    DSC_EXECUCAO: '',
  });

  // Função para atualizar o estado do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Aqui você irá implementar a função handleSubmit e constructQuery conforme explicado anteriormente

  // Renderização dos inputs
