function getImages(dados){

    const ListPersonagens = dados["data"]["results"];

    var input = document.querySelector('#name-personagem');

    var name = input.value;

    if (name.length > 0) {

            var parent = document.querySelector('#lista-herois');
            parent.innerHTML = "";

            const ListaFiltrada = ListPersonagens.filter(person => (person.name == name));

            console.log(ListaFiltrada);

            list = document.querySelector("#lista-herois");
            //Se não houver itens após pesquisa
            if (ListaFiltrada.length == 0) {

                let box = document.createElement('div');
                box.classList.add('content');
                box.classList.add('justify-content-center');
                box.classList.add('align-items-start');
                list.appendChild(box);

                let h4 = document.createElement('h4');
                h4.classList.add('name-hero');
                h4.textContent = "Sua pesquisa não retornou nenhum resultado.";
                box.appendChild(h4);

            }

            ListaFiltrada.forEach(personagem => {

            //criando a div content
            let box = document.createElement('div');
            box.classList.add('content');
            box.setAttribute('onclick', 'showHistorys(this)');
            list.appendChild(box);

            //criando a primeira coluna
            let col1 = document.createElement('div');
            col1.classList.add('col-4');
            col1.classList.add('flex');
            col1.classList.add('align-items-center');
            box.appendChild(col1);

            //conteudo da col-1
            let thumb = document.createElement('img');
            thumb.classList.add('thumbnail-hero');
            thumb.src = personagem['thumbnail']['path'] +'.'+personagem['thumbnail']['extension'];
            col1.appendChild(thumb);

            let cod = document.createElement('span');
            cod.classList.add('cod-hero');
            cod.textContent = personagem.id;
            col1.appendChild(cod);

            let name = document.createElement('h4');
            name.classList.add('name-hero');
            name.textContent = personagem.name;
            col1.appendChild(name);

            //criando a segunda coluna
            let col2 = document.createElement('div');
            col2.classList.add('col-4');
            col2.classList.add('mobile');
            col2.classList.add('flex');
            col2.classList.add('align-items-center');
            box.appendChild(col2);

            //conteudo da col-2
            let listSeries = document.createElement('ul');
            listSeries.classList.add('series-list');
            listSeries.classList.add('flex');
            listSeries.classList.add('d-collumn');
            col2.appendChild(listSeries);

            personagem['series']['items'].slice(-3).forEach(series => {
                let seriesName = document.createElement('span');
                seriesName.textContent = series['name'];
                listSeries.appendChild(seriesName);
            })

            //mensagem se retorno das series for null
            if (personagem['series']['items'].length === 0) {
                let retornoSeries = document.createElement('span');
                retornoSeries.textContent = 'Nenhuma série registrada para o personagem.';
                listSeries.appendChild(retornoSeries);
            }

            //criando a terceira coluna
            let col3 = document.createElement('div');
            col3.classList.add('col-4');
            col3.classList.add('mobile');
            col3.classList.add('flex');
            col3.classList.add('align-items-center');
            box.appendChild(col3);

            //conteudo da col-3
            let listEventos = document.createElement('ul');
            listEventos.classList.add('eventos-list');
            listEventos.classList.add('flex');
            listEventos.classList.add('d-collumn');
            col3.appendChild(listEventos);

            personagem['events']['items'].slice(-3).forEach(eventos => {
                let eventosName = document.createElement('span');
                eventosName.textContent = eventos['name'];
                listEventos.appendChild(eventosName);
            })

            //mensagem se retorno dos eventos for null
            if (personagem['events']['items'].length === 0) {
                let retornoEventos = document.createElement('span');
                retornoEventos.textContent = 'Nenhum evento registrado para o personagem.';
                listEventos.appendChild(retornoEventos);
            }

        })

    }

    if (name.length == 0) {

            ListPersonagens.forEach(personagem => {
            list = document.querySelector("#lista-herois");

            //criando a div content
            let box = document.createElement('div');
            box.classList.add('content');
            box.setAttribute('onclick', 'showHistorys(this)');
            list.appendChild(box);

            //criando a primeira coluna
            let col1 = document.createElement('div');
            col1.classList.add('col-4');
            col1.classList.add('flex');
            col1.classList.add('align-items-center');
            box.appendChild(col1);

            //conteudo da col-1
            let thumb = document.createElement('img');
            thumb.classList.add('thumbnail-hero');
            thumb.src = personagem['thumbnail']['path'] +'.'+personagem['thumbnail']['extension'];
            col1.appendChild(thumb);

            let cod = document.createElement('span');
            cod.classList.add('cod-hero');
            cod.textContent = personagem.id;
            col1.appendChild(cod);

            let name = document.createElement('h4');
            name.classList.add('name-hero');
            name.textContent = personagem.name;
            col1.appendChild(name);

            //criando a segunda coluna
            let col2 = document.createElement('div');
            col2.classList.add('col-4');
            col2.classList.add('mobile');
            col2.classList.add('flex');
            col2.classList.add('align-items-center');
            box.appendChild(col2);

            //conteudo da col-2
            let listSeries = document.createElement('ul');
            listSeries.classList.add('series-list');
            listSeries.classList.add('flex');
            listSeries.classList.add('d-collumn');
            col2.appendChild(listSeries);

            personagem['series']['items'].slice(-3).forEach(series => {
                let seriesName = document.createElement('span');
                seriesName.textContent = series['name'];
                listSeries.appendChild(seriesName);
            })

            //mensagem se retorno das series for null
            if (personagem['series']['items'].length === 0) {
                let retornoSeries = document.createElement('span');
                retornoSeries.textContent = 'Nenhuma série registrada para o personagem.';
                listSeries.appendChild(retornoSeries);
            }

            //criando a terceira coluna
            let col3 = document.createElement('div');
            col3.classList.add('col-4');
            col3.classList.add('mobile');
            col3.classList.add('flex');
            col3.classList.add('align-items-center');
            box.appendChild(col3);

            //conteudo da col-3
            let listEventos = document.createElement('ul');
            listEventos.classList.add('eventos-list');
            listEventos.classList.add('flex');
            listEventos.classList.add('d-collumn');
            col3.appendChild(listEventos);

            personagem['events']['items'].slice(-3).forEach(eventos => {
                let eventosName = document.createElement('span');
                eventosName.textContent = eventos['name'];
                listEventos.appendChild(eventosName);
            })

            //mensagem se retorno dos eventos for null
            if (personagem['events']['items'].length === 0) {
                let retornoEventos = document.createElement('span');
                retornoEventos.textContent = 'Nenhum evento registrado para o personagem.';
                listEventos.appendChild(retornoEventos);
            }

        })
            
    }        

}


function getHistorys(dados){

    const Detalhes = dados["data"]["results"];

    let body = document.querySelector("#html-doc");
    body.classList.add('hidden-scroll');

    Detalhes.forEach(detalhe => {
        section = document.querySelector("#detalhe");

        //criando a div detalhe
        let detalhe_div = document.createElement('div');
        detalhe_div.classList.add('detalhe-heroi');
        detalhe_div.setAttribute('id', 'detalhe-heroi');
        section.appendChild(detalhe_div);

        //criando a row cabeçalho
        let cabecalho = document.createElement('div');
        cabecalho.classList.add('row');
        detalhe_div.appendChild(cabecalho);

            //criando a col cabeçalho
            let col_cabecalho = document.createElement('div');
            col_cabecalho.classList.add('col-12');
            col_cabecalho.classList.add('flex');
            col_cabecalho.classList.add('d-collumn');
            col_cabecalho.classList.add('align-items-center');
            cabecalho.appendChild(col_cabecalho);

                //criando o botão do cabeçalho
                let btn_cabecalho = document.createElement('a');
                btn_cabecalho.classList.add('info-btn');
                btn_cabecalho.textContent = 'Voltar';
                btn_cabecalho.setAttribute('id', 'close-detail');
                btn_cabecalho.setAttribute('onclick', 'deleteHistory()');
                col_cabecalho.appendChild(btn_cabecalho);

                //criando o h1 do cabeçalho
                let h1_cabecalho = document.createElement('h1');
                h1_cabecalho.classList.add('title');
                h1_cabecalho.classList.add('text-center');
                h1_cabecalho.textContent = detalhe['name'];
                col_cabecalho.appendChild(h1_cabecalho);

                //criando o img do cabeçalho
                let img_cabecalho = document.createElement('img');
                img_cabecalho.classList.add('img-personagem');
                img_cabecalho.src = detalhe['thumbnail']['path'] +'.'+detalhe['thumbnail']['extension'];
                col_cabecalho.appendChild(img_cabecalho);

                //criando a descrição do cabeçalho
                let p_cabecalho = document.createElement('p');
                p_cabecalho.classList.add('descricao-personagem');
                p_cabecalho.classList.add('text-center');
                p_cabecalho.textContent = detalhe['description'];
                col_cabecalho.appendChild(p_cabecalho);

        //criando a row conteudo
        let conteudo = document.createElement('div');
        conteudo.classList.add('row');
        detalhe_div.appendChild(conteudo);

            //criando a col-1 conteudo
            let col1_conteudo = document.createElement('div');
            col1_conteudo.classList.add('col-6');
            col1_conteudo.classList.add('flex');
            col1_conteudo.classList.add('d-collumn');
            col1_conteudo.classList.add('align-items-center');
            col1_conteudo.classList.add('detail-col');
            conteudo.appendChild(col1_conteudo);

                //criando o titulo da col-1
                let col1_titulo = document.createElement('h4');
                col1_titulo.classList.add('sub-title');
                col1_titulo.textContent = 'Séries';
                col1_conteudo.appendChild(col1_titulo);

                //criando a lista da col-1
                let col1_lista = document.createElement('ul');
                col1_lista.classList.add('series-list');
                col1_lista.classList.add('flex');
                col1_lista.classList.add('d-collumn');
                col1_conteudo.appendChild(col1_lista);

                    //criando os itens da lista da col-1
                    detalhe["series"]["items"].forEach(series => {
                        let col1_lista_span = document.createElement('span');
                        col1_lista_span.textContent = series['name'];
                        col1_lista.appendChild(col1_lista_span);

                        //mensagem se retorno das series for null
                        if (series.length === 0) {
                            let retornodetSeries = document.createElement('span');
                            retornodetSeries.textContent = 'Nenhuma série registrada para o personagem.';
                            col1_lista.appendChild(retornodetSeries);
                        }
                    })


            //criando a col-2 conteudo
            let col2_conteudo = document.createElement('div');
            col2_conteudo.classList.add('col-6');
            col2_conteudo.classList.add('flex');
            col2_conteudo.classList.add('d-collumn');
            col2_conteudo.classList.add('align-items-center');
            col2_conteudo.classList.add('detail-col');
            conteudo.appendChild(col2_conteudo);

                //criando o titulo da col-2
                let col2_titulo = document.createElement('h4');
                col2_titulo.classList.add('sub-title');
                col2_titulo.textContent = 'Eventos';
                col2_conteudo.appendChild(col2_titulo);

                //criando a lista da col-2
                let col2_lista = document.createElement('ul');
                col2_lista.classList.add('eventos-list');
                col2_lista.classList.add('flex');
                col2_lista.classList.add('d-collumn');
                col2_conteudo.appendChild(col2_lista);

                    //criando os itens da lista da col-2
                    detalhe["events"]["items"].forEach(eventos => {
                        let col2_lista_span = document.createElement('span');
                        col2_lista_span.textContent = eventos['name'];
                        col2_lista.appendChild(col2_lista_span);

                        //mensagem se retorno dos eventos for null
                        if (eventos.length === 0) {
                            let retornodeteventos = document.createElement('span');
                            retornodeteventos.textContent = 'Nenhum evento registrado para o personagem.';
                            col2_lista.appendChild(retornodeteventos);
                        }
                    })


            //criando a col-3 conteudo
            let col3_conteudo = document.createElement('div');
            col3_conteudo.classList.add('col-6');
            col3_conteudo.classList.add('flex');
            col3_conteudo.classList.add('d-collumn');
            col3_conteudo.classList.add('align-items-center');
            col3_conteudo.classList.add('detail-col');
            conteudo.appendChild(col3_conteudo);

                //criando o titulo da col-3
                let col3_titulo = document.createElement('h4');
                col3_titulo.classList.add('sub-title');
                col3_titulo.textContent = 'Comics';
                col3_conteudo.appendChild(col3_titulo);

                //criando a lista da col-3
                let col3_lista = document.createElement('ul');
                col3_lista.classList.add('comics-list');
                col3_lista.classList.add('flex');
                col3_lista.classList.add('d-collumn');
                col3_conteudo.appendChild(col3_lista);

                    //criando os itens da lista da col-3
                    detalhe["comics"]["items"].forEach(comics => {
                        let col3_lista_span = document.createElement('span');
                        col3_lista_span.textContent = comics['name'];
                        col3_lista.appendChild(col3_lista_span);

                        //mensagem se retorno dos comics for null
                        if (comics.length === 0) {
                            let retornodetComics = document.createElement('span');
                            retornodetComics.textContent = 'Nenhum comic registrado para o personagem.';
                            col3_lista.appendChild(retornodetComics);
                        }
                    })


            //criando a col-4 conteudo
            let col4_conteudo = document.createElement('div');
            col4_conteudo.classList.add('col-6');
            col4_conteudo.classList.add('flex');
            col4_conteudo.classList.add('d-collumn');
            col4_conteudo.classList.add('align-items-center');
            col4_conteudo.classList.add('detail-col');
            conteudo.appendChild(col4_conteudo);

                //criando o titulo da col-4
                let col4_titulo = document.createElement('h4');
                col4_titulo.classList.add('sub-title');
                col4_titulo.textContent = 'Comics';
                col4_conteudo.appendChild(col4_titulo);

                //criando a lista da col-4
                let col4_lista = document.createElement('ul');
                col4_lista.classList.add('comics-list');
                col4_lista.classList.add('flex');
                col4_lista.classList.add('d-collumn');
                col4_conteudo.appendChild(col4_lista);

                    //criando os itens da lista da col-4
                    detalhe["stories"]["items"].forEach(stories => {
                        let col4_lista_span = document.createElement('span');
                        col4_lista_span.textContent = stories['name'];
                        col4_lista.appendChild(col4_lista_span);

                        //mensagem se retorno dos stories for null
                        if (stories.length === 0) {
                            let retornodetStories = document.createElement('span');
                            retornodetStories.textContent = 'Nenhuma história registrada para o personagem.';
                            col4_lista.appendChild(retornodetStories);
                        }
                    })


    })

    
}

function deleteHistory(){
    // Removendo a page history
    document.querySelector('#detalhe-heroi').remove();
    //retorna o overflow na body
    let body = document.querySelector("#html-doc");
    body.classList.remove('hidden-scroll');
}