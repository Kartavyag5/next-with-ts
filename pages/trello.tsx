import styles from '../styles/Trello.module.css'
import logo from '../public/img_w3slogo.gif'
import Image from 'next/image';
import imageLoader from '../imageLoader';

const TrelloPage = () =>{

    function allowDrop(e:any) {
        e.preventDefault();
      }
      
      function drag(e:any) {
        e.dataTransfer.setData("text", e.target.id);
      }
      
      function drop(e:any) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
      }

    return (
        <>  
            <div className={styles.gridContainer}>
                <div className={styles.header}>
                    <h2>Header</h2>
                </div>
                
                <div className={styles.left}>
                    <p>Column1</p>
                    <div id="div1" className={styles.div1} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
                        {/* <image src={logo} draggable="true" onDragStart={(e)=>drag(e)} id="drag1" width="88" height="31" /> */}
                        <div draggable="true" onDragStart={(e)=>drag(e)} id="drag1">

                            <Image
                            className={styles.image}
                            loader={imageLoader} unoptimized
                            src={logo}
                            width="50"
                            height="50"
                            />
                        </div>
                    </div>

                    <div id="div2" className={styles.div2} onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}></div>
                </div>
                <div className={styles.middle}>Column2</div>  
                <div className={styles.right}>Column3</div>
                
                <div className="footer">
                <p>Footer</p>
                </div>
            </div>
        </>
    )
}
export default TrelloPage