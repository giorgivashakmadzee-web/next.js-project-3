import Link from "next/link";
import Image from 'next/image';
import classes from './event-item.module.css';


function EventItem( props){
    const { title, date, location, image, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

return <li className={classes.item}>
    <div className={classes.image}>
        <Image src={`/${image}`} alt={title} fill sizes="(max-width: 767px) 100vw, 40vw" />
    </div>
    <div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <time>{humanReadableDate}</time>
        </div>
        <div>
            <address>{formattedAddress}</address>
        </div>
        <div>
            <Link href={exploreLink}>Explore Event</Link>
        </div>
    </div>
    
</li>
}


export default EventItem;