/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package guru.zoroark.tegral.niwen.lexer

/**
 * Represents a label for a state in a multiple labeled state context. Can be
 * implemented by anything.
 *
 * @see stateLabel
 */
interface StateLabel

/**
 * State labels created by [stateLabel] are instances of this class.
 */
class GenericStateLabel : StateLabel

/**
 * Create a generic state label (actually an instance of [GenericStateLabel]
 * and returns it. This function provides an easy and dirty way of creating
 * labels when you do not have an enum in place.
 */
fun stateLabel(): GenericStateLabel = GenericStateLabel()
