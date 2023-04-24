import React, { ReactNode, useState } from 'react'
import DatePicker from 'react-datepicker'
import './index.scss'
interface Props extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: string;
  disabled?: boolean;
  label?: string;
  name?: string;
  icon?: ReactNode;
  date?: Date;
  onChange: (e?: any) => void
}

export const DateInputPri: React.FC<Props> = ({ className = '', label, name, icon, date = new Date(), onChange }) => {
  return (
    <div id="date">
      <div className="date-pri">
        {
          label && <label className="date-pri-label" htmlFor={name}>{label}</label>
        }
        <div>
          {icon && <span className="date-pri-icon">{icon}</span>}
          <div className={`date-pri-field ${icon && 'icon'} ${className} `}>
            <DatePicker
              selected={date}
              name={name}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const DateInput: React.FC<Props> = ({ className, label, name, icon, date = new Date(), onChange }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <div id="date">
      <div className="date-sec">
        {
          label && <label className={`date-sec-label ${icon && 'icon'}`} htmlFor={name}>{label}</label>
        }
        <div>

          {icon && <span className="date-sec-icon">{icon}</span>}
          <div className={`date-sec-field ${icon && 'icon'} ${className} `}>
            <DatePicker
              selected={date}
              onChange={onChange}
              name={name}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default DateInput