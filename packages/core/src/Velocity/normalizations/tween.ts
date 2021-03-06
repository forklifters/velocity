/*
 * velocity-animate (C) 2014-2018 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */

// Typedefs
import { HTMLorSVGElement } from "../../velocity";

// Project
import { registerNormalization } from "./normalizations";

/**
 * A fake normalization used to allow the "tween" property easy access.
 */
function getSetTween(_element: HTMLorSVGElement, propertyValue?: string) {
	if (propertyValue === undefined) {
		return "";
	}
}

registerNormalization(["Element", "tween", getSetTween as any]);
