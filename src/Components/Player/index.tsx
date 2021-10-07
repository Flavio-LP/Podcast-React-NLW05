import styles from './styles.module.scss';

export function Player(){

    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando agora"></img>
                <strong>Trocando agora</strong>
            </header>
            <div>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer>
                
            </footer>

        </div>
        
    );
}