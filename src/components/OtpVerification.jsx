import { useEffect, useState } from 'react'
import Modal from './Modal';

function OtpVerification({ open, setOpenpModal }) {
    const [otp, setOtp] = useState('');
    const [secondsLimit, setSecondsLimit] = useState(30);

    useEffect(() => {
        if (secondsLimit > 0) {
            const timeout = setTimeout(() => {
                setSecondsLimit(seconds => {
                    if (seconds - 1 < 10) return `0${seconds - 1}`;
                    return seconds - 1
                });
            }, 1000)

            return () => {
                clearTimeout(timeout)
            }
        } else {
            console.log('Timeout')
        }
    }, [secondsLimit])

    const handleOTPSubmit = e => {
        e.preventDefault();

        setOpenpModal(false);
        setSecondsLimit(30);
    }

    const handleResend = () => {
        /// Api request to resend otp 
        setSecondsLimit(30);
    }

    return (
        <Modal open={open} closeModal={setOpenpModal}>
            <h2 className="text-lg font-medium">Verifiation</h2>
            <p className="text-sm">We sent 6 Digit OTP Code to mani***@gmail.com</p>
            {secondsLimit > 0 ? (
                <>
                    <p className="mt-4 text-sm">Enter 6 Digit OTP Code</p>
                    <form onSubmit={handleOTPSubmit}>
                        <input
                            type="text"
                            placeholder="Enter OTP..."
                            value={otp}
                            className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-3 text-sm border-2 focus:outline-none"
                            onChange={e => setOtp(e.target.value)}
                            minLength="6"
                            maxLength="6"
                            required
                        />
                        <div className="flex justify-end items-center mt-2 text-sm">
                            <p>00:<span className="w-6 inline-block">{secondsLimit}</span></p>
                            <button type="button" onClick={handleResend}>Resend</button>
                        </div>
                        <button type="submit" className="w-full bg-teal-700 py-2 rounded-lg text-white mt-4 text-sm">
                            Submit
                        </button>
                    </form>
                </>
            ) : (
                <button type="button" onClick={handleResend} className="w-full bg-teal-700 py-2 rounded-lg text-white mt-4 text-sm">
                    Resend
                </button>
            )}
        </Modal>
    )
}

export default OtpVerification