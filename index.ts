import post from 'request-promise'
post({
    uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
    headers: {
        'X-API-TOKEN': 'co9VYMePCliR0Ddydoxa0pbTP5QEqR2fzVzH',
    },
    body: {
        from: 'purrfect-windshield',
        to: '5549998301488',
        contents: [
            {
                type: 'text',
                text: 'Lembre-se que sua consulta está marcada para às 15:00',
            },
        ],
    },
    json: true,
})
    .then((response) => {
        console.log('Response:', response)
    })
    .catch((error) => {
        console.log('Error:', error)
    })