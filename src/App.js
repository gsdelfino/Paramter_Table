import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = 'https://adb-6714856313253689.9.azuredatabricks.net/ajax-api/2.0/redash-v2/query_results?csrf=a0ca090a-3ce0-429c-9426-c725951d7fb7';
    const body = {
      query: `INSERT INTO desenvolvimento.default.tb_parametro_carga (DAT_INCLUSAO, NOM_AMBIENTE, NOM_CAMADA, DSC_TIP_ORIGEM, DSC_TIP_DESTINO, DSC_DOMINIO, COD_PIPELINE, NOM_PIPELINE_TAB, DSC_PIPELINE_PATH, DSC_PIPELINE_COMMENT, DSC_PATH_NOTEBOOK, COD_FREQUENCIA, DSC_FREQUENCIA, COD_STATUS, DES_STATUS, COD_EXECUCAO, DSC_EXECUCAO) VALUES ('${formData.DAT_INCLUSAO}', '${formData.NOM_AMBIENTE}', '${formData.NOM_CAMADA}', '${formData.DSC_TIP_ORIGEM}', '${formData.DSC_TIP_DESTINO}', '${formData.DSC_DOMINIO}', '${formData.COD_PIPELINE}', '${formData.NOM_PIPELINE_TAB}', '${formData.DSC_PIPELINE_PATH}', '${formData.DSC_PIPELINE_COMMENT}', '${formData.DSC_PATH_NOTEBOOK}', '${formData.COD_FREQUENCIA}', '${formData.DSC_FREQUENCIA}', '${formData.COD_STATUS}', '${formData.DES_STATUS}', '${formData.COD_EXECUCAO}', '${formData.DSC_EXECUCAO}');`,
      catalog: 'desenvolvimento',
      schema: 'default',
      token: 'dapi0f1e43a5b8832ba01fd1ca2077cb859a-3',
      data_source_id: '3e9beb65-4afe-41e4-9856-24548c559f32',
    };

    try {
      const response = await axios.post(endpoint, body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer dapi0f1e43a5b8832ba01fd1ca2077cb859a-3',
          "Access-Control-Allow-Origin": "true",
          "Cookie": "workspace-url=adb-6714856313253689.9.azuredatabricks.net|adb-7208740803580323.3.azuredatabricks.net|adb-5841555515019151.11.azuredatabricks.net|adb-6226397775262915.15.azuredatabricks.net|adb-1163870235697580.0.azuredatabricks.net; locale=en; JSESSIONID=auth-c49cdfdfb-gdvsl-1avqrt41o3stv1f2153yezhw8k.auth-c49cdfdfb-gdvsl-"
        },
      });
      alert('Dados inseridos com sucesso!');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao enviar dados', error);
      alert('Erro ao inserir dados.');
    }
  };


  return (
    <div>
      <div class="header">
        <h1>Registras Novas Tabelas</h1>
      </div>
      <form onSubmit={handleSubmit}>

        {/* Data de Inclusão */}
        <input type="text" name="DAT_INCLUSAO" value={formData.DAT_INCLUSAO} onChange={handleInputChange} placeholder="Data de Inclusão" />

        {/* Nome do Ambiente */}
        <input type="text" name="NOM_AMBIENTE" value={formData.NOM_AMBIENTE} onChange={handleInputChange} placeholder="Nome do Ambiente" />

        {/* Nome da Camada */}
        <input type="text" name="NOM_CAMADA" value={formData.NOM_CAMADA} onChange={handleInputChange} placeholder="Nome da Camada" />

        {/* Descrição Tipo Origem */}
        <input type="text" name="DSC_TIP_ORIGEM" value={formData.DSC_TIP_ORIGEM} onChange={handleInputChange} placeholder="Descrição Tipo Origem" />

        {/* Descrição Tipo Destino */}
        <input type="text" name="DSC_TIP_DESTINO" value={formData.DSC_TIP_DESTINO} onChange={handleInputChange} placeholder="Descrição Tipo Destino" />

        {/* Descrição Domínio */}
        <input type="text" name="DSC_DOMINIO" value={formData.DSC_DOMINIO} onChange={handleInputChange} placeholder="Descrição Domínio" />

        {/* Código Pipeline */}
        <input type="text" name="COD_PIPELINE" value={formData.COD_PIPELINE} onChange={handleInputChange} placeholder="Código Pipeline" />

        {/* Nome Pipeline Tabela */}
        <input type="text" name="NOM_PIPELINE_TAB" value={formData.NOM_PIPELINE_TAB} onChange={handleInputChange} placeholder="Nome Pipeline Tabela" />

        {/* Descrição Caminho Pipeline */}
        <input type="text" name="DSC_PIPELINE_PATH" value={formData.DSC_PIPELINE_PATH} onChange={handleInputChange} placeholder="Descrição Caminho Pipeline" />

        {/* Comentário Pipeline */}
        <input type="text" name="DSC_PIPELINE_COMMENT" value={formData.DSC_PIPELINE_COMMENT} onChange={handleInputChange} placeholder="Comentário Pipeline" />

        {/* Caminho Notebook */}
        <input type="text" name="DSC_PATH_NOTEBOOK" value={formData.DSC_PATH_NOTEBOOK} onChange={handleInputChange} placeholder="Caminho Notebook" />

        {/* Código Frequência */}
        <input type="text" name="COD_FREQUENCIA" value={formData.COD_FREQUENCIA} onChange={handleInputChange} placeholder="Código Frequência" />

        {/* Descrição Frequência */}
        <input type="text" name="DSC_FREQUENCIA" value={formData.DSC_FREQUENCIA} onChange={handleInputChange} placeholder="Descrição Frequência" />

        {/* Código Status */}
        <input type="text" name="COD_STATUS" value={formData.COD_STATUS} onChange={handleInputChange} placeholder="Código Status" />

        {/* Descrição Status */}
        <input type="text" name="DES_STATUS" value={formData.DES_STATUS} onChange={handleInputChange} placeholder="Descrição Status" />

        {/* Código Execução */}
        <input type="text" name="COD_EXECUCAO" value={formData.COD_EXECUCAO} onChange={handleInputChange} placeholder="Código Execução" />

        {/* Descrição Execução */}
        <input type="text" name="DSC_EXECUCAO" value={formData.DSC_EXECUCAO} onChange={handleInputChange} placeholder="Descrição Execução" />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default App;