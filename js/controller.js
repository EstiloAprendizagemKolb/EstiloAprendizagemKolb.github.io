$(document).ready(function() {			

//BLOCK RADIOS

	$('input[type="radio"]').on( "click", function() {

	for (p=1; p < 13; p++) {
		for (i=1; i < 5; i++) {

			 if  ($(event.target).hasClass("p"+p)) {

				if ( $(event.target).hasClass("coluna"+i) ) {
					$('.coluna'+i+'.p'+p+':checked').not(this).attr('checked', false);
				}

			 }
		}
	}

	});

//FRASES

	 var frases = ["Que a força esteja com você!", "Pense como um próton e mantenha-se positivo.", "Você só falha quando para de tentar."];

	  function incentivo(){
	    var i = parseInt(Math.random()*3);
	    return frases[i];
	    }
	 
	 document.getElementById("motivacional").innerHTML = incentivo() ;

//CAIXA DE INFORMACAO - ((( DESABILITADA )))

		$("#info").click(function() {	
					$('#modal-container-info').modal({
      					show: true
    				});
		});
				 

// VARIAVEIS

	var EC = 0;
	var OR = 0;
	var CA = 0;
	var EA = 0;

	var divergente = 0;
	var assimilador = 0;
	var convergente = 0;
	var acomodador = 0;
	var resultadosomas = 0;

	var ap1 = 0; //+abstrata ou -concreta
	var ap2 = 0; //+ativa ou -reflexiva

// VARIAVEIS DE DESCRICAO

	var descricaoConvergente = "Você aprende melhor pensando e realizando. Combina o gosto de colocar “a mão na massa” com aspectos teóricos. Gosta de realizar atividades com indicações sequenciais detalhadas (como aquelas dos manuais de operação de aparelhos), solucionar problemas específicos e testar hipóteses (tentativa e erro). Tem habilidades em encontrar aplicações práticas para ideias e teorias. Pessoas desse estilo possuem poucas habilidades sociais e intrapessoais, preferindo ambientes de aprendizagem mais tranquilos (ex.: gosta de trabalha sozinho realizando tarefas técnicas sem se relacionarem com outras pessoas). Parecem se sair melhor em situações nas quais existe uma única resposta ou solução correta para cada pergunta ou problema. Não tem dificuldades ao experimentar inovações para solucionar problemas práticos. Esse estilo também é conhecido como PRAGMÁTICO.";
	var descricaoAcomodador = "Você aprende melhor experimentando e realizando, como, por exemplo, através de atividades práticas, apresentações, role-plays e debates. Combina o gosto de colocar “a mão na massa” com atividades concretas. Tem capacidade de se sobressair e acomodar ou adaptar a circunstâncias imediatas específicas. Utiliza mais a intuição do que a lógica e tem a tendência a se arriscar mais a ousar mais. Costuma utilizar a opinião de outras pessoas ao invés das suas próprias, por isso geralmente faz muitas perguntas. Assume uma abordagem prática e vivencial. É sociável e gosta de trabalhar em equipe. Geralmente exerce um papel importante em situações onde são necessárias ações e iniciativas para a realização de tarefas. Por terem pouca habilidade analítica são impulsivas e as vezes é percebido como impaciente e pressionador. Esse estilo também é conhecido como ATIVISTA.";
	var descricaoAssimilador = "Você aprende melhor combinando observação e pensamento, por isso suas preferências por palestras, conferências e aulas. Para eles, ideias e conceitos abstratos são mais importantes do que pessoas e pode ser percebido como pouco sociável. Tem facilidade com números e modelos conceituais, preferindo especulações abstratas em detrimento de situações práticas. Compreende as informações de forma ampla e as organizam de forma clara e lógica. Tem propensão para a carreira científica. Gosta de explorar modelos analíticos e de ter tempo para pensar e refletir sobre as coisas. Esse estilo também é conhecido como TEÓRICO.";
	var descricaoDivergente = "Você aprende melhor combinando sensações com observações, ou seja através de atividades práticas seguidas de um retorno. Possui muita sensibilidade artística e conseguem ver as coisas de perspectivas diferentes. Prefere observar ao invés de agir. Suas estratégias para a solução de problemas iniciam coletando informações para em seguida usarem a criatividade e a inventividade para oferecer mais de uma solução possível. A denominação “divergentes” se dá pelo fato de terem bom desempenho em situações que requerem geração de ideias, como grupos de trabalho e brainstorms. Possuem vasto interesse cultural e gostam de pessoas. Preferem trabalhar em grupo, ouvindo sugestões com mente aberta e recebendo feedbacks pessoais. Gostam de autonomia na busca de conhecimento. Esse estilo também é conhecido como REFLEXIVO.";

//RESULTADO 

	$("#botao").click(function() {					

				//Condicional para obrigar a marcar todos os campos

				if (!(($("input:radio[name='1opA']").is(":checked"))&&
						($("input:radio[name='1opB']").is(":checked"))&&
						($("input:radio[name='1opC']").is(":checked"))&&
						($("input:radio[name='1opD']").is(":checked")))) {


											$('html, body').animate({
											        scrollTop: (($("#s1").offset().top)-50)
											    }, 500);
											$('#s1').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});

						
						}
		   else if  (!(($("input:radio[name='2opA']").is(":checked"))&&
						($("input:radio[name='2opB']").is(":checked"))&&
						($("input:radio[name='2opC']").is(":checked"))&&
						($("input:radio[name='2opD']").is(":checked")))) {


											$('html, body').animate({
											        scrollTop: (($("#s2").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});

						
						}
		   else if  (!(($("input:radio[name='3opA']").is(":checked"))&&
						($("input:radio[name='3opB']").is(":checked"))&&
						($("input:radio[name='3opC']").is(":checked"))&&
						($("input:radio[name='3opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s3").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='4opA']").is(":checked"))&&
						($("input:radio[name='4opB']").is(":checked"))&&
						($("input:radio[name='4opC']").is(":checked"))&&
						($("input:radio[name='4opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s4").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='5opA']").is(":checked"))&&
						($("input:radio[name='5opB']").is(":checked"))&&
						($("input:radio[name='5opC']").is(":checked"))&&
						($("input:radio[name='5opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s5").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='6opA']").is(":checked"))&&
						($("input:radio[name='6opB']").is(":checked"))&&
						($("input:radio[name='6opC']").is(":checked"))&&
						($("input:radio[name='6opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s6").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='7opA']").is(":checked"))&&
						($("input:radio[name='7opB']").is(":checked"))&&
						($("input:radio[name='7opC']").is(":checked"))&&
						($("input:radio[name='7opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s7").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='8opA']").is(":checked"))&&
						($("input:radio[name='8opB']").is(":checked"))&&
						($("input:radio[name='8opC']").is(":checked"))&&
						($("input:radio[name='8opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s8").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='9opA']").is(":checked"))&&
						($("input:radio[name='9opB']").is(":checked"))&&
						($("input:radio[name='9opC']").is(":checked"))&&
						($("input:radio[name='9opD']").is(":checked")))) {


											$('html, body').animate({
											        scrollTop: (($("#s9").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","black");
											$('#s9').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='10opA']").is(":checked"))&&
						($("input:radio[name='10opB']").is(":checked"))&&
						($("input:radio[name='10opC']").is(":checked"))&&
						($("input:radio[name='10opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s10").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","black");
											$('#s9').css("color","black");
											$('#s10').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='11opA']").is(":checked"))&&
						($("input:radio[name='11opB']").is(":checked"))&&
						($("input:radio[name='11opC']").is(":checked"))&&
						($("input:radio[name='11opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s11").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","black");
											$('#s9').css("color","black");
											$('#s10').css("color","black");
											$('#s11').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}
			else if  (!(($("input:radio[name='12opA']").is(":checked"))&&
						($("input:radio[name='12opB']").is(":checked"))&&
						($("input:radio[name='12opC']").is(":checked"))&&
						($("input:radio[name='12opD']").is(":checked")))) {

											$('html, body').animate({
											        scrollTop: (($("#s12").offset().top)-50)
											    }, 500);
											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","black");
											$('#s9').css("color","black");
											$('#s10').css("color","black");
											$('#s11').css("color","black");
											$('#s12').css("color","red");
											$('#modal-alerta').modal({
							      					show: true
							    				});
						}


			else {

											$('#s1').css("color","black");
											$('#s2').css("color","black");
											$('#s3').css("color","black");
											$('#s4').css("color","black");
											$('#s5').css("color","black");
											$('#s6').css("color","black");
											$('#s7').css("color","black");
											$('#s8').css("color","black");
											$('#s9').css("color","black");
											$('#s10').css("color","black");
											$('#s11').css("color","black");
											$('#s12').css("color","black");

					//Abre a popup

					$('#modal-container-resultado').modal({
      					show: true
    				});


//CALCULO EC

	//1A
				for (i=1; i < 5; i++) {
					if ($("input[name='1opA']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}
	//2C
				for (i=1; i < 5; i++) {
					if ($("input[name='2opC']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}


	//3D
				for (i=1; i < 5; i++) {
					if ($("input[name='3opD']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//4A
				for (i=1; i < 5; i++) {
					if ($("input[name='4opA']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}


	//5A
				for (i=1; i < 5; i++) {
					if ($("input[name='5opA']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}


	//6C
				for (i=1; i < 5; i++) {
					if ($("input[name='6opC']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//7B
				for (i=1; i < 5; i++) {
					if ($("input[name='7opB']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//8D
				for (i=1; i < 5; i++) {
					if ($("input[name='8opD']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//9B
				for (i=1; i < 5; i++) {
					if ($("input[name='9opB']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//10B
				for (i=1; i < 5; i++) {
					if ($("input[name='10opB']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//11A
				for (i=1; i < 5; i++) {
					if ($("input[name='11opA']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

	//12B
				for (i=1; i < 5; i++) {
					if ($("input[name='12opB']:checked").val() == i) {
				       	EC = EC + i;						
					}
				}

//CALCULO OR

	//1D
			for (i=1; i < 5; i++) {
				if ($("input[name='1opD']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//2A
			for (i=1; i < 5; i++) {
				if ($("input[name='2opA']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//3C
			for (i=1; i < 5; i++) {
				if ($("input[name='3opC']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//4C
			for (i=1; i < 5; i++) {
				if ($("input[name='4opC']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}
	//5B
			for (i=1; i < 5; i++) {
				if ($("input[name='5opB']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//6A
			for (i=1; i < 5; i++) {
				if ($("input[name='6opA']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//7A
			for (i=1; i < 5; i++) {
				if ($("input[name='7opA']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//8C
			for (i=1; i < 5; i++) {
				if ($("input[name='8opC']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//9A
			for (i=1; i < 5; i++) {
				if ($("input[name='9opA']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//10A
			for (i=1; i < 5; i++) {
				if ($("input[name='10opA']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//11B
			for (i=1; i < 5; i++) {
				if ($("input[name='11opB']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

	//12C
			for (i=1; i < 5; i++) {
				if ($("input[name='12opC']:checked").val() == i) {
				       	OR = OR + i;						
				}
			}

//CALCULO CA

	//1B
			for (i=1; i < 5; i++) {
				if ($("input[name='1opB']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//2B
			for (i=1; i < 5; i++) {
				if ($("input[name='2opB']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//3A
			for (i=1; i < 5; i++) {
				if ($("input[name='3opB']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//4D
			for (i=1; i < 5; i++) {
				if ($("input[name='4opD']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//5C
			for (i=1; i < 5; i++) {
				if ($("input[name='5opC']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//6D
			for (i=1; i < 5; i++) {
				if ($("input[name='6opD']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//7C
			for (i=1; i < 5; i++) {
				if ($("input[name='7opC']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//8B
			for (i=1; i < 5; i++) {
				if ($("input[name='8opB']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//9D
			for (i=1; i < 5; i++) {
				if ($("input[name='9opD']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//10D
			for (i=1; i < 5; i++) {
				if ($("input[name='10opD']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//11C
			for (i=1; i < 5; i++) {
				if ($("input[name='11opC']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}

	//12A
			for (i=1; i < 5; i++) {
				if ($("input[name='12opA']:checked").val() == i) {
				       	CA = CA + i;						
				}
			}


//CALCULO EA

	//1C
			for (i=1; i < 5; i++) {
				if ($("input[name='1opC']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}

	//2C
			for (i=1; i < 5; i++) {
				if ($("input[name='2opD']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}

	//3B
			for (i=1; i < 5; i++) {
				if ($("input[name='3opB']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//4B
			for (i=1; i < 5; i++) {
				if ($("input[name='4opB']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//5D
			for (i=1; i < 5; i++) {
				if ($("input[name='5opD']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//6B
			for (i=1; i < 5; i++) {
				if ($("input[name='6opB']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//7D
			for (i=1; i < 5; i++) {
				if ($("input[name='7opD']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//8A
			for (i=1; i < 5; i++) {
				if ($("input[name='8opA']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//9C
			for (i=1; i < 5; i++) {
				if ($("input[name='9opC']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//10C
			for (i=1; i < 5; i++) {
				if ($("input[name='10opC']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//11D
			for (i=1; i < 5; i++) {
				if ($("input[name='11opD']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


	//12D
			for (i=1; i < 5; i++) {
				if ($("input[name='12opD']:checked").val() == i) {
				       	EA = EA + i;						
				}
			}


//SOMATORIO DO RESULTADO

	divergente = EC + OR;
	assimilador = OR + CA;
	convergente = CA + EA;
	acomodador = EA + EC;
	resultadosomas = Math.max(divergente, assimilador, convergente, acomodador);

//ESTILOS DE APRENDIZAGEM PREDOMINANTES

	ap1 = CA - EC; //+abstrata ou -concreta
	ap2 = EA - OR; //+ativa ou -reflexiva

				//Calcula o estilo

							var estilo = "";

				function descobrirEstilo() {

							if (resultadosomas == divergente) {
								estilo = "DIVERGENTE"
							}

							if (resultadosomas == assimilador) {
								estilo = "ASSIMILADOR" 
							}

							if (resultadosomas == convergente) {
								estilo = "CONVERGENTE" 
							}

							if (resultadosomas == acomodador) {
								estilo = "ACOMODADOR"
							}
				}
				
				descobrirEstilo();

//RESULTADOS

				document.getElementById("resultado-final").innerHTML = " Seu estilo de aprendizagem predominante é " + estilo;
					var forma1 = "concreta";
					var forma2 = "reflexiva";
					if (ap1 > 0) {
						forma1 = "abstrata";
					}
					if (ap2 > 0) {
						forma2 = "ativa"
					}
				document.getElementById("resultado-final2").innerHTML = " Sua forma de aprender é " + forma1 + " e " + forma2;

			//Resultado da descricao

				if (estilo == "CONVERGENTE") {
					document.getElementById("resultado-descricao").innerHTML = descricaoConvergente;
				}

				if (estilo == "ACOMODADOR") {
					document.getElementById("resultado-descricao").innerHTML = descricaoAcomodador;
				}
				if (estilo == "ASSIMILADOR") {
					document.getElementById("resultado-descricao").innerHTML = descricaoAssimilador;
				}
				if (estilo == "DIVERGENTE") {
					document.getElementById("resultado-descricao").innerHTML = descricaoDivergente;
				}

		}

// GERANDO GRAFICO

	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
	    type: 'radar',
	    data: {
	        labels: ["Experiência Concreta", "Observação Reflexiva", "Conceituação Abstrata", "Experimentação Ativa"],
	        datasets: [{
	            label: 'Pontuação',
	            data: [EC, OR, CA, EA],
	            backgroundColor: ['rgba(99, 132, 255, 0.2)'],
	            borderColor: ['rgba(54, 162, 235, 1)'],
	            borderWidth: 1
	        }]
	    },
	    options: {
				scale: {
	                ticks: {
	                    beginAtZero: true
	                }
	            },
	            legend: {
	            	display: false
	            }
	    }
	});

			});


//RESETANDO AS VARIAVEIS COM O FECHAMENTO DO MODAL

	$('#modal-container-resultado').on('hidden.bs.modal', function () {
	  
						EC = 0;
						OR = 0;
						CA = 0;
						EA = 0;

	});

//RESETANDO OS RADIOS E ROLANDO PRO INICIO PARA REFAZER O TESTE

	$("#refazer").click(function() {	
					
				$('input[type="radio"]').not(this).attr('checked', false);
				window.scrollTo(0, 0);
	});


});
