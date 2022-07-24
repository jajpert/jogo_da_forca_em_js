class Forca {

	constructor(palavra) {
		this._palavraSecreta = palavra;
		this.letrasChutadas = []; // Deve conter todas as letras chutadas
		this.vidas = 6; // Quantidade de vidas restantes
		this.palavra = palavra.split("").map((letra) => ("_")); // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
	}

	chutar(chute) {

		if (chute.length === 1 && !this.letrasChutadas.includes(chute))
		{
			let acertou = false;
			for (let i = 0; i < this._palavraSecreta.length; i++) {
				if (this._palavraSecreta[i] === chute)
				{
					acertou = true;	
					this.palavra[i] = chute;
				}
			}
		
			if (!acertou)
				this.vidas -= 1;
		
			this.letrasChutadas.push(chute);
		}
	}

	buscarEstado() {
		if (this.vidas === 0)
			return "perdeu";
		
		if (!this.palavra.includes("_"))
			return "ganhou";

		return "aguardando chute";
	} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

	buscarDadosDoJogo() {
		return {
			letrasChutadas: this.letrasChutadas,
			vidas: this.vidas,
			palavra: this.palavra
		}
	}
}

module.exports = Forca;
