interface AuthContextType {
    taskList: Array<PropCard>,
    onOpen: void,
}

type PropCard = {
    description: string,
    flag: PropFlags,
    item: number,
    timeLimit: string,
    title: string,
}

type PropFlags = 'Urgente' | 'Opcional'