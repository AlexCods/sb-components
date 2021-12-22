import "./myLabel.css";

export interface MyLabelProps {
	/**
	 * Texto de el label
	 */
	label: string;
	/**
	 * Tamaño de la fuente
	 */
	size: "normal" | "h1" | "h2" | "h3";
	/**
	 * Label en mayúsculas
	 */
	allCaps: boolean;
	/**
	 * Color de la fuente
	 */
	color: "primary" | "secondary" | "tertiary";
    /**
	 * Establecer color de la fuente
	 */
	fontColor?: string;
}



export const MyLabel = ({
	label = "No Label",
	size = "normal",
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {

    const fontColorStyle = {
        color: fontColor
    }

	return <span className={`label ${size} text-${ color } ${ (allCaps) && 'text-uppercase'}`}
        style={ 
            (fontColor ? fontColorStyle : {})
        }
    >{label}</span>;
};
