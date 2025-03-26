export default {
    name: 'varer',
    type: 'document',
    title: 'Varer',

    fields: [
        {
            name: 'varenavn',
            type: 'string',
            title: 'Navn på varen'
        },
        {
            name: 'pris',
            type: 'number',
            title: 'Pris på varen'
        },
        {
            name: 'kategorinavn',
            type: 'reference',
            to: [{type: 'kategorier'}]

        },
        {
            name: 'bilde',
            type: 'image',
            title: 'Bilde av varen'
        }
    ]
}
