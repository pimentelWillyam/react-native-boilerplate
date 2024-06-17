import { DadosOcorrencia } from "./DadosOcorrencia"
import { DadosVitima } from "./DadosVitima"
import { ExamesSolicitados } from "./ExamesSolicitados"
import { IdentificacaoCorpo } from "./IdentificacaoCorpo"
import { InformacoesSobreCorpo } from "./InformacoesSobreCorpo"

export type Ocorrencia = {
    dadosOcorrencia: DadosOcorrencia
    dadosVitima: DadosVitima
    informacoesSobreCorpo: InformacoesSobreCorpo
    examesSolicitados: ExamesSolicitados
    identificacaoCorpo: IdentificacaoCorpo
}