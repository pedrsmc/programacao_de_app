const imagem = document.querySelector("#imagem")
const sinopse = document.querySelector("#sinopse")
const killers = document.querySelector("#killers")
const john = document.querySelector("#john")
const barbie = document.querySelector("#barbie")
const spiderman = document.querySelector("#spiderman")

killers.addEventListener('click', capaKillers)
john.addEventListener('click', capaJohn)
barbie.addEventListener('click', capaBarbie)
spiderman.addEventListener('click', capaSpiderman)

function capaKillers() {
    imagem.src = "images/killers.webp"
    sinopse.textContent = "Assassinos da Lua das Flores é um futuro longa-metragem western de crime dramático estadunidense diro, também produtor da obra, estrela ao lado de Robert De Niro, Lily Gladstone, Jesse Plemons, Brendan Fraser e John Lithgow. Este projeto marca a sexta colaboração entre Scorsese e DiCaprio, bem como a décima entre Scorsese e De Niro. O desenvolvimento do filme se iniciou em março de 2016, quando a Imperative Entertainment ganhou os direitos de adaptação cinematográfica do romance homônimo. Scorsese e DiCaprio foram contratados emigido e produzido por Martin Scorsese a partir de um roteiro que coescreveu com Eric Roth baseado na obra literária de não ficção homônima de David Grann lançada em 2017 acerca dos assassinatos de Oklahoma na década de 1920 contra a tribo indígena, Osage após a descoberta de petróleo em terras tribais. Leonardo DiCaprio 2017, com a produção inicialmente prevista para começar no início de 2018. Após vários"
}

function capaJohn() {
    imagem.src = "images/johnwick.jpg"
    sinopse.textContent = "O assassino profissional retorna às telas para John Wick 4: Baba Yaga. O assassino profissional John Wick (Keanu Reeves) agora virou metade do submundo contra ele com sua vingança, que agora está entrando em sua quarta rodada em Nova York, Berlim, Paris e Osaka. Sua equipe, composta por Bowery King (Laurence Fishburne), o gerente do hotel Winston (Ian McShane) e o concierge Charon (Lance Reddick) do lendário hotel assassino Continental, novamente fazem parte da festa. No entanto, as chances de escapar desta vez parecem quase impossíveis, pois o maior inimigo está surgindo. O implacável chefe do submundo Marquis de Gramont (Bill Skarsgård), que tem alianças inteiras atrás dele, representa a maior e sanguinária ameaça até hoje. Mas seus capangas também são durões, incluindo Shimazu (Hiroyuki Sanada) e Killa (Scott Adkins) localizados. Felizmente, existem velhos aliados como Caine (Donnie Yen) que correm para ajudar Wick. Não há caminho de volta, só um sobrevive."
}

function capaBarbie() {
    imagem.src = "images/barbie.jpg"
    sinopse.textContent = "No fabuloso live-action da boneca mais famosa do mundo, acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear com as amigas e curtir intermináveis festas. Porém, uma das bonecas (interpretada por Margot Robbie) começa a perceber que talvez sua vida não seja tão perfeita assim, questionando-se sobre o sentido de sua existência e alarmando suas companheiras. Logo, sua vida no mundo cor-de-rosa começa a mudar e, eventualmente, ela sai de Barbieland. Forçada a viver no mundo real, Barbie precisa lutar com as dificuldades de não ser mais apenas uma boneca - pelo menos ela está acompanhada de seu fiel e amado Ken (Ryan Gosling), que parece cada vez mais fascinado pela vida no novo mundo. Enquanto isso, Barbie tem dificuldades para se ajustar, e precisa enfrentar vários momentos nada coloridos até descobrir que a verdadeira beleza está no interior de cada um."
}

function capaSpiderman() {
    imagem.src = "images/spiderman.webp"
    sinopse.textContent = "Homem-Aranha: Através do Aranhaverso, é a continuação do vencedor do Oscar Homem-Aranha: No Aranhaverso, de 2018, que acompanha Miles Morales (Shameik Moore), o simpático Homem-Aranha do Brooklyn. Neste novo capítulo, Miles está de volta para uma nova missão em sua agitada vida como super herói. No novo filme, Morales é transportado para uma aventura épica através do multiverso, e deve unir forças com a mulher-aranha Gwen Stacy (Hailee Steinfeld) e um novo time de Pessoas-Aranha, formado por heróis de diversas dimensões. No entanto, tudo muda quando os heróis entram em conflito sobre como lidar com uma nova ameaça, e Miles se vê em um impasse. E para piorar ainda mais a situação, eles precisam enfrentar um vilão muito mais poderoso do que qualquer coisa que já tenham encontrado antes. Agora, para salvar as pessoas que ele mais ama no mundo, Miles deve redefinir o que significa ser um super herói."
}

