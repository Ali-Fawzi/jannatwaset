export type project = {
    id: string,
    createdAt: string,
    urlImage: string,
    propertieses: string,
    costumerName: string,
    description: string,
    services: string
}
export type projectResponse = {
    currentPage: number,
    pageSize: number,
    totalPages: number,
    data : project[]
}

export type article = {
    id: string,
    title: string,
    description: string,
    image: string,
    createdAt: string,
}
export type articleResponse = {
    currentPage: number,
    pageSize: number,
    totalPages: number,
    data : article[]
}

export type duty = {
    id: string,
    title: string,
    subtitle: string,
    urls: string[],
    iconId: string,
    phoneNumberService: string,
    description: string,
}
export type dutyResponse = {
    currentPage: number,
    pageSize: number,
    totalPages: number,
    data : duty[]
}

export type sponsor = {
    id: string,
    url: string,
}
export type hero = {
    id: string,
    url: string,
}