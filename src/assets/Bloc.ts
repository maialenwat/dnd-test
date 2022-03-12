export default interface Bloc {
    id: string
    title: string
    children: Bloc[]
    isMain: boolean
}