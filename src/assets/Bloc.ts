export default interface Bloc {
    id: string
    color: string
    title: string
    children: Bloc[]
    isMain: boolean
}