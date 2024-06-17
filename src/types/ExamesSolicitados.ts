export type ExamesSolicitados = {
    naoSolicitados: boolean
    dna: {
        sunungueal: boolean
        coletaDNAReferencia: boolean
        restosMortaisNaoIdentificados: boolean
    }
    toxicologico: boolean
    sexologico: {
        vaginal: boolean
        anal: boolean
    }
    residuografico: boolean
    alcoolemia: boolean
    outrosExames: boolean
    descricaoOutrosExames: string
}