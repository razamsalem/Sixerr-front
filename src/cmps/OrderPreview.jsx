import { utilService } from "../services/util.service"
import { LongTxt } from "./LongTxt"
import { DropdownBtn } from "./DropdownBtn.jsx"
import { Link } from "react-router-dom"
const defaultUserImg = 'https://res.cloudinary.com/dgsfbxsed/image/upload/v1698663308/defaultUserImg_psy0oe.png'

export function OrderPreview({ order, mode, openModal, onApproveOrder, onDeclineOrder, onFulfillOrder }) {
    const profile = mode === 'buyer' ? order.seller : order.buyer

    function checkStatus(status) {
        if (status === 'pending') return 'pending-label'
        if (status === 'approved') return 'approved-label'
        if (status === 'rejected') return 'rejected-label'
        if (status === 'fulfilled') return 'fulfilled-label'
    }

    function handleActionClick(event) {
        event.stopPropagation()
    }
    
    return (
        <tr key={order._id} onClick={() => openModal(order)}>
            <td>
                <div className="user-with-img">
                    <img src={profile.imgUrl} alt="Buyer img" onError={e => e.currentTarget.src = defaultUserImg} />
                    {profile.fullname}
                </div>

            </td>
            <td className='order-title'><LongTxt txt={order.gig.title} length={33} showReadMore={false} /></td>
            <td>{utilService.calculateDaysFromTimestamp(order.createdAt, order.daysToMake)}</td>
            <td>${order.packPrice}</td>
            <td onClick={handleActionClick} className="status">
                {order && <span className={`${checkStatus(order.status)} label `}> {utilService.capitalizeFirstLetter(order.status)} </span>}
                {mode === 'seller' &&
                    <DropdownBtn>
                        <span className="action approve-gig" onClick={(ev) => { onApproveOrder(ev, order) }}>Approve</span>
                        <span className="action decline-gig" onClick={(ev) => { onDeclineOrder(ev, order) }}>Decline</span>
                        <span className="action fulfilled-gig" onClick={(ev) => { onFulfillOrder(ev, order) }}>Mark as fulfilled</span>
                    </DropdownBtn>}

                {mode === 'buyer' &&
                    <Link to={`/order/review?orderId=${order._id}`}>Review</Link>
                }

            </td>
        </tr>
    )
}