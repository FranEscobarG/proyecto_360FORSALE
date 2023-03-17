import styled from "styled-components";
import ButtonFilter from "../atoms/ButtonFilter";

const StyledSearch = styled.div`
    margin-top: ${ props => (props.homeSearch) ? '10%' : '1%' };
    width: ${ props => (props.homeSearch) ? '80%' : '90%' } ;
    min-height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 2%;
    border-radius: 1rem 1rem 0 0;
    background-color: ${ props => (props.homeSearch) ? '#5caeffc9' : 'transparent' };
    border-bottom: ${ props => (props.homeSearch) ? 'none' : '4px solid #8AC5FF' };
    
    .buttons{
        width: 48%;
        margin-bottom: ${ props => (props.homeSearch) ? '0' : '3%' };
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }

    .search{
        width: 50%;
        margin-bottom: ${ props => (props.homeSearch) ? '0' : '3%' };
        padding: .4rem 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: ${ props => (props.homeSearch) ? 'none' : 'solid 1px #5caeffc9' };
        border-radius: .6rem;
        background-color: #FFFFFF;
    }

    .search .inputSearch{
        width: 85%;
        padding: .9rem .9rem .9rem 0;
        border: none;
        border-radius: .5rem;
        font-size: 1rem;
        outline: none; /* --> Quita marcos del input al seleccionarlo*/
    }
    .search .btn_search{
        padding: .3rem .8rem .2rem;
        margin-left: 1rem;
        font-family: 'Harmattan';
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        color: #2E97FF;
        border: 2px solid #2E97FF;
        border-radius: 1.5rem;
        background-color: transparent;
        transition: all .4s ease-in;
    }
    .search .btn_search:hover{
        background-color: #2E97FF;
        color: white;
    }

    @media screen and (max-width:1370px){
        bottom: 8%;

        .buttons{
            gap: .9rem;
        }
        .search{
            padding: .2rem .6rem;
        }
        .search .inputSearch{
            font-size: .9rem;
        }
        .search .btn_search{
            padding: .2rem .6rem .1rem;
            font-size: 1.2rem;
        }   
    }

    @media screen and (max-width:767px){
        width: 90%;
        bottom: 3%;
        padding: .5rem .8rem;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 1rem;
        
        .buttons{
            width: 100%;
            gap: 1rem;
        }
        
        .search{
            width: 100%;
            padding: .2rem .6rem;
        }
        
        .search .inputSearch{
            width: 80%;
            font-size: .8rem;
        }
        .search .btn_search{
            padding: .2rem .4rem .1rem;
            margin-left: 0;
            font-size: 1rem;
        }   
    }
`

function Search({homeSearch, categories, filterCategory}) {
    return ( 
        <StyledSearch homeSearch={homeSearch} >
            <div className="buttons">
                {
                    categories.map(category => (
                        <ButtonFilter type="button" key={category}  value={category} category={category} filterCategory={filterCategory} />
                    ))
                }
                {/* <ButtonFilter type="button" value="Catalogo" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Ventas" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Rentas" handlerClick={"handlerClick"} active />
                <ButtonFilter type="button" value="Remates" handlerClick={"handlerClick"} active /> */}
            </div>
            <div className="search">
                <input type="search" name="" id="" className="inputSearch" placeholder=" Ingresa especificaciones del inmueble"/>
                <button className="btn_search">Buscar</button>
            </div>
        </StyledSearch>
     );
}

export default Search;