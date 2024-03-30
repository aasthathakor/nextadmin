import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = () => {
  return (
    <div className={styles.container }>
    <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
            </div>
            Iphone
        </div>
        <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Title</label>
          <input type="text" name="username" placeholder='john doe' />
          <label>Price</label>
          <input type="number" name="price" placeholder='johndoe@gmail.com'/>
          <label>Stock</label>
          <input type="text" name="stock" placeholder='johndoe' />
          <label>Color</label>
          <input type="text" name="color" placeholder='5825846854' />
          <label>Size</label>
          <textarea type="text" name="size" placeholder='sant luice' />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computer</option>
          </select>
          <label>Description</label>
          <select name="desc" id="desc" row='10' placeholder='descriptions'>
            <option value={true}>Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProduct