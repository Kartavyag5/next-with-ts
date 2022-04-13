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
                
                <div className={styles.left} onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}>
                    <p className={styles.pActive}>Active</p>
                    <div id="div1" className={styles.div1} onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>                    
                        {/* <Image
                            id ="drag1"
                            className={styles.image}
                            loader={imageLoader} unoptimized
                            src={logo}
                            draggable="true" 
                            onDragStart={(e)=>drag(e)}
                        /> */}
                        <p
                            className={styles.p} 
                            draggable="true"
                            id ="drag1"
                            onDragStart={(e)=>drag(e)}>drag-me</p>
                    </div>

                </div>
                <div className={styles.middle} onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}>
                    <p>Completed</p>
                    <div id="div2" className={styles.div2} onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}></div>
                </div>  
                <div className={styles.right} onDrop={(e)=>drop(e)} onDragOver={(e)=>allowDrop(e)}>
                    <p>Remaining</p>
                    
                </div>
                
                <div className="footer">
                <p>Footer</p>
                </div>
            </div>
        </>
    )
}
export default TrelloPage