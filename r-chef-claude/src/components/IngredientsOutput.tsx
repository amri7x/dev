import type { ingredientType } from "../types/ingredientsType";
import {cn} from "../utils"

export const IngredientsOutput = ({items, className, ...props}: ingredientType) => (
    <section>
        <h3 className="font-bold text-xl text-[#141413] mt-8 mb-3">Ingredients on hands :</h3>
        <ul className={cn(
            "flex flex-col ml-4 justify-center items-start list-disc",
            className
            )}
            {...props}>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
        </ul>
    </section>
    
)