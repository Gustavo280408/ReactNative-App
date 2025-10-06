 export interface AuthContextType {
    taskList: Array<PropCard>,
    onOpen: void,
}

 export type PropCard = {
    description: string,
    flag: PropFlags,
    item: number,
    timeLimit: string,
    title: string,
}

export type PropFlags = 'Urgente' | 'Opcional'