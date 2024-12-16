function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção desejada
    document.getElementById(sectionId).classList.add('active');
    
    // Atualiza o botão ativo
    document.querySelectorAll('.navbar button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Define o botão correspondente ao sectionId como ativo
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');

    const section = document.getElementById(sectionId);
    if (section) {
        // Rola até a seção com uma transição suave
        section.scrollIntoView({ behavior: 'smooth' });
    }
}