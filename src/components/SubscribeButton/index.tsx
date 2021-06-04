import styles from '../SubscribeButton/styles.module.scss'


interface SubscribeButtonProps{
priceId:string;

}

export  function SubscribeButton({priceId}:SubscribeButtonProps){


  return(
    <button 
    className={styles.subscribButton}
    type="button">
      Subscribe Now
    </button>
  )

}