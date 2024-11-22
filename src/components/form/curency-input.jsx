'use client'

export function CurencyInput({ id, name, placeholder }) {
    return (
        <input
            type="text"
            id={id}
            name={name}
            className="w-full p-2 border rounded-md"
            placeholder={placeholder}
            onInput={(e) => {
                let value = e.target.value.replace(/[^\d]/g, '');
                if (value) {
                    value = parseInt(value).toLocaleString('th-TH');
                }
                e.target.value = value;
            }}
        />
    )
}