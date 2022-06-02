package guru.zoroark.tegral.di.test.mockk

import guru.zoroark.tegral.di.dsl.put
import guru.zoroark.tegral.di.test.TestMutableInjectionEnvironment
import io.mockk.mockk
import kotlin.reflect.KClass

/**
 * Creates a MockK mock using the given settings and lambda, then puts it in the Tegral DI test environment.
 *
 * This is comparable to calling:
 *
 * ```kotlin
 * val result = mockk(...) { ... }
 * put(result)
 * ```
 */
inline fun <reified T : Any> TestMutableInjectionEnvironment.putMock(
    name: String? = null,
    relaxed: Boolean = false,
    vararg moreInterfaces: KClass<*>,
    relaxUnitFun: Boolean = false,
    mockSetup: T.() -> Unit
): T {
    val mock = mockk(
        name = name,
        relaxed = relaxed,
        moreInterfaces = moreInterfaces,
        relaxUnitFun = relaxUnitFun,
        block = mockSetup
    )
    put { mock }
    return mock
}